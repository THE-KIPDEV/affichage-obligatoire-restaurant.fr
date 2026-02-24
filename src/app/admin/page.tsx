"use client";

import { useState, useEffect, useCallback } from "react";

// --- Types ---
interface DocumentStatus {
  id: string;
  title: string;
  icon: string;
  category: string;
  pdf: {
    exists: boolean;
    size?: number;
    modifiedAt?: string;
  };
}

interface ShippingAddress {
  full_name: string;
  address_line1: string;
  address_line2: string | null;
  city: string;
  postal_code: string;
  country: string;
  phone: string | null;
}

interface Order {
  id: number;
  stripe_session_id: string;
  type: "digital" | "physical";
  email: string | null;
  amount_cents: number;
  status: string;
  created_at: string;
  shipped_at: string | null;
  shipping?: ShippingAddress;
}

// --- Login Form ---
function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      onLogin();
    } else {
      setError("Mot de passe incorrect.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Administration
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Entrez le mot de passe"
            autoFocus
          />
          {error && (
            <p className="text-red-600 text-sm mt-2">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full mt-4 bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Documents Tab ---
function DocumentsTab() {
  const [documents, setDocuments] = useState<DocumentStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string | null>(null);

  const fetchDocuments = useCallback(async () => {
    const res = await fetch("/api/admin/documents");
    if (res.ok) {
      const data = await res.json();
      setDocuments(data.documents);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  async function handleUpload(docId: string, file: File) {
    setUploading(docId);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`/api/admin/documents/${docId}`, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      await fetchDocuments();
    } else {
      const data = await res.json();
      alert(data.error || "Erreur lors de l'upload.");
    }
    setUploading(null);
  }

  async function handleDelete(docId: string) {
    if (!confirm("Supprimer ce PDF ?")) return;

    const res = await fetch(`/api/admin/documents/${docId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      await fetchDocuments();
    }
  }

  function formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} o`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }

  if (loading) {
    return <div className="text-center py-12 text-gray-500">Chargement...</div>;
  }

  const uploaded = documents.filter((d) => d.pdf.exists).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">
          Documents ({uploaded}/{documents.length} uploadés)
        </h2>
        <div className="text-sm text-gray-500">
          {uploaded === documents.length ? (
            <span className="text-green-600 font-medium">Tous les documents sont prêts</span>
          ) : (
            <span className="text-amber-600 font-medium">
              {documents.length - uploaded} document(s) manquant(s)
            </span>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className={`bg-white border rounded-xl p-4 flex items-center gap-4 ${
              doc.pdf.exists ? "border-green-200" : "border-red-200"
            }`}
          >
            <span className="text-2xl" aria-hidden="true">{doc.icon}</span>

            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 truncate">{doc.title}</div>
              <div className="text-xs text-gray-500">{doc.category}</div>
              {doc.pdf.exists && doc.pdf.size && (
                <div className="text-xs text-gray-400 mt-1">
                  {formatSize(doc.pdf.size)}
                  {doc.pdf.modifiedAt &&
                    ` · ${new Date(doc.pdf.modifiedAt).toLocaleDateString("fr-FR")}`}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              {doc.pdf.exists ? (
                <>
                  <span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded">
                    PDF OK
                  </span>
                  <a
                    href={`/api/admin/documents/${doc.id}`}
                    className="text-xs text-blue-600 hover:text-blue-800 px-2 py-1 rounded border border-blue-200 hover:bg-blue-50"
                  >
                    Voir
                  </a>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="text-xs text-red-600 hover:text-red-800 px-2 py-1 rounded border border-red-200 hover:bg-red-50 cursor-pointer"
                  >
                    Suppr.
                  </button>
                </>
              ) : (
                <span className="text-red-600 text-xs font-medium bg-red-50 px-2 py-1 rounded">
                  Manquant
                </span>
              )}

              <label
                className={`text-xs font-medium px-3 py-1.5 rounded border cursor-pointer ${
                  uploading === doc.id
                    ? "bg-gray-100 text-gray-400 border-gray-200"
                    : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                }`}
              >
                {uploading === doc.id ? "Upload..." : doc.pdf.exists ? "Remplacer" : "Uploader"}
                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  disabled={uploading === doc.id}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleUpload(doc.id, file);
                    e.target.value = "";
                  }}
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Orders Tab ---
function OrdersTab() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending_shipment" | "shipped">("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "physical" | "digital">("all");

  const fetchOrders = useCallback(async () => {
    const params = new URLSearchParams();
    if (typeFilter !== "all") params.set("type", typeFilter);
    if (filter !== "all") params.set("status", filter);

    const res = await fetch(`/api/admin/orders?${params}`);
    if (res.ok) {
      const data = await res.json();
      setOrders(data.orders);
    }
    setLoading(false);
  }, [filter, typeFilter]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  async function markAsShipped(orderId: number) {
    if (!confirm("Marquer comme expédié ?")) return;

    const res = await fetch(`/api/admin/orders/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "shipped" }),
    });

    if (res.ok) {
      await fetchOrders();
    }
  }

  const statusLabels: Record<string, { label: string; color: string }> = {
    paid: { label: "Payé", color: "bg-green-50 text-green-700" },
    pending_shipment: { label: "En attente d'envoi", color: "bg-amber-50 text-amber-700" },
    shipped: { label: "Expédié", color: "bg-blue-50 text-blue-700" },
    cancelled: { label: "Annulé", color: "bg-red-50 text-red-700" },
  };

  if (loading) {
    return <div className="text-center py-12 text-gray-500">Chargement...</div>;
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <h2 className="text-lg font-bold text-gray-900">Commandes</h2>

        <div className="flex gap-2 ml-auto">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as typeof typeFilter)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white"
          >
            <option value="all">Tous types</option>
            <option value="physical">Postales</option>
            <option value="digital">Numériques</option>
          </select>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white"
          >
            <option value="all">Tous statuts</option>
            <option value="pending_shipment">En attente</option>
            <option value="shipped">Expédiées</option>
          </select>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          Aucune commande pour le moment.
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-gray-200 rounded-xl p-5"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">#{order.id}</span>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded ${
                        order.type === "physical"
                          ? "bg-purple-50 text-purple-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {order.type === "physical" ? "Postal" : "Numérique"}
                    </span>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded ${
                        statusLabels[order.status]?.color || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {statusLabels[order.status]?.label || order.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {order.email || "Email non disponible"} ·{" "}
                    {new Date(order.created_at).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">
                    {(order.amount_cents / 100).toFixed(2).replace(".", ",")} €
                  </div>
                </div>
              </div>

              {/* Shipping address for physical orders */}
              {order.shipping && (
                <div className="bg-gray-50 rounded-lg p-3 mb-3 text-sm">
                  <div className="font-medium text-gray-800 mb-1">
                    Adresse de livraison :
                  </div>
                  <div className="text-gray-600">
                    {order.shipping.full_name}
                    <br />
                    {order.shipping.address_line1}
                    {order.shipping.address_line2 && (
                      <>
                        <br />
                        {order.shipping.address_line2}
                      </>
                    )}
                    <br />
                    {order.shipping.postal_code} {order.shipping.city}
                    <br />
                    {order.shipping.country}
                    {order.shipping.phone && (
                      <>
                        <br />
                        Tel: {order.shipping.phone}
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Shipped date */}
              {order.shipped_at && (
                <div className="text-xs text-blue-600 mb-2">
                  Expédié le{" "}
                  {new Date(order.shipped_at).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              )}

              {/* Actions */}
              {order.type === "physical" && order.status === "pending_shipment" && (
                <button
                  onClick={() => markAsShipped(order.id)}
                  className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg cursor-pointer"
                >
                  Marquer comme expédié
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Main Admin Page ---
export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [activeTab, setActiveTab] = useState<"documents" | "orders">("documents");

  useEffect(() => {
    // Check if already authenticated by trying to access a protected route
    fetch("/api/admin/documents")
      .then((res) => {
        if (res.ok) setAuthenticated(true);
      })
      .finally(() => setChecking(false));
  }, []);

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setAuthenticated(false);
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Chargement...
      </div>
    );
  }

  if (!authenticated) {
    return <LoginForm onLogin={() => setAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">
            Admin – affichage-obligatoire-restaurant.fr
          </h1>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-red-600 cursor-pointer"
          >
            Déconnexion
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <div className="flex gap-1 bg-gray-200 rounded-lg p-1 mb-6 w-fit">
          <button
            onClick={() => setActiveTab("documents")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
              activeTab === "documents"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Documents
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
              activeTab === "orders"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Commandes
          </button>
        </div>

        {activeTab === "documents" ? <DocumentsTab /> : <OrdersTab />}
      </div>
    </div>
  );
}
