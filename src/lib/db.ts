import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "database.sqlite");

let _db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!_db) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    _db = new Database(DB_PATH);
    _db.pragma("journal_mode = WAL");
    _db.pragma("foreign_keys = ON");
    migrate(_db);
  }
  return _db;
}

function migrate(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      stripe_session_id TEXT UNIQUE NOT NULL,
      type TEXT NOT NULL CHECK(type IN ('digital', 'physical')),
      email TEXT,
      amount_cents INTEGER NOT NULL,
      status TEXT NOT NULL DEFAULT 'paid' CHECK(status IN ('paid', 'pending_shipment', 'shipped', 'cancelled')),
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      shipped_at TEXT
    );

    CREATE TABLE IF NOT EXISTS shipping_addresses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL UNIQUE,
      full_name TEXT NOT NULL,
      address_line1 TEXT NOT NULL,
      address_line2 TEXT,
      city TEXT NOT NULL,
      postal_code TEXT NOT NULL,
      country TEXT NOT NULL DEFAULT 'FR',
      phone TEXT,
      FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
    );
  `);
}

// --- Orders ---

export interface Order {
  id: number;
  stripe_session_id: string;
  type: "digital" | "physical";
  email: string | null;
  amount_cents: number;
  status: "paid" | "pending_shipment" | "shipped" | "cancelled";
  created_at: string;
  shipped_at: string | null;
}

export interface ShippingAddress {
  id: number;
  order_id: number;
  full_name: string;
  address_line1: string;
  address_line2: string | null;
  city: string;
  postal_code: string;
  country: string;
  phone: string | null;
}

export interface OrderWithAddress extends Order {
  shipping?: ShippingAddress;
}

export function createOrder(data: {
  stripe_session_id: string;
  type: "digital" | "physical";
  email: string | null;
  amount_cents: number;
  status: string;
}): number {
  const db = getDb();
  const stmt = db.prepare(
    `INSERT INTO orders (stripe_session_id, type, email, amount_cents, status) VALUES (?, ?, ?, ?, ?)`
  );
  const result = stmt.run(
    data.stripe_session_id,
    data.type,
    data.email,
    data.amount_cents,
    data.status
  );
  return result.lastInsertRowid as number;
}

export function createShippingAddress(data: {
  order_id: number;
  full_name: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  postal_code: string;
  country: string;
  phone?: string;
}) {
  const db = getDb();
  const stmt = db.prepare(
    `INSERT INTO shipping_addresses (order_id, full_name, address_line1, address_line2, city, postal_code, country, phone)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  );
  stmt.run(
    data.order_id,
    data.full_name,
    data.address_line1,
    data.address_line2 || null,
    data.city,
    data.postal_code,
    data.country,
    data.phone || null
  );
}

export function getOrders(filters?: {
  type?: string;
  status?: string;
}): OrderWithAddress[] {
  const db = getDb();
  let query = `SELECT * FROM orders`;
  const conditions: string[] = [];
  const params: string[] = [];

  if (filters?.type) {
    conditions.push("type = ?");
    params.push(filters.type);
  }
  if (filters?.status) {
    conditions.push("status = ?");
    params.push(filters.status);
  }

  if (conditions.length > 0) {
    query += ` WHERE ${conditions.join(" AND ")}`;
  }
  query += ` ORDER BY created_at DESC`;

  const orders = db.prepare(query).all(...params) as Order[];

  return orders.map((order) => {
    const shipping = db
      .prepare(`SELECT * FROM shipping_addresses WHERE order_id = ?`)
      .get(order.id) as ShippingAddress | undefined;
    return { ...order, shipping };
  });
}

export function getOrderById(id: number): OrderWithAddress | null {
  const db = getDb();
  const order = db.prepare(`SELECT * FROM orders WHERE id = ?`).get(id) as Order | undefined;
  if (!order) return null;

  const shipping = db
    .prepare(`SELECT * FROM shipping_addresses WHERE order_id = ?`)
    .get(order.id) as ShippingAddress | undefined;

  return { ...order, shipping };
}

export function updateOrderStatus(
  id: number,
  status: string,
  shippedAt?: string
) {
  const db = getDb();
  if (shippedAt) {
    db.prepare(`UPDATE orders SET status = ?, shipped_at = ? WHERE id = ?`).run(
      status,
      shippedAt,
      id
    );
  } else {
    db.prepare(`UPDATE orders SET status = ? WHERE id = ?`).run(status, id);
  }
}

export function getOrderBySessionId(sessionId: string): Order | null {
  const db = getDb();
  return (
    (db
      .prepare(`SELECT * FROM orders WHERE stripe_session_id = ?`)
      .get(sessionId) as Order | undefined) || null
  );
}
