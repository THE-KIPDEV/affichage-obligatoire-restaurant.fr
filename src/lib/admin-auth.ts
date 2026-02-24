import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "admin_token";
const TOKEN_EXPIRY_HOURS = 24;

function getSecret(): string {
  return process.env.ADMIN_PASSWORD || "changeme";
}

export function verifyAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return crypto.timingSafeEqual(
    Buffer.from(password),
    Buffer.from(expected)
  );
}

export function createAdminToken(): string {
  const secret = getSecret();
  const expiresAt = Date.now() + TOKEN_EXPIRY_HOURS * 60 * 60 * 1000;
  const payload = `${expiresAt}`;
  const hmac = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return `${payload}.${hmac}`;
}

export function verifyAdminToken(token: string): boolean {
  const secret = getSecret();
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [payload, signature] = parts;
  const expiresAt = parseInt(payload, 10);

  if (isNaN(expiresAt) || Date.now() > expiresAt) return false;

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature, "hex"),
      Buffer.from(expectedSignature, "hex")
    );
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyAdminToken(token);
}

export function getAdminCookieOptions() {
  return {
    name: COOKIE_NAME,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: TOKEN_EXPIRY_HOURS * 60 * 60,
    path: "/",
  };
}
