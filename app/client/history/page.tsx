'use client';

import { MOCK_ORDERS } from '@/data/mock';
import Link from 'next/link';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-12">
      <div className="max-w-md mx-auto px-4">
        <Link href="/client" className="text-blue-600 text-sm font-medium mb-4 inline-flex items-center gap-1 hover:text-blue-700">
          ← Volver
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Historial de Pedidos</h1>

        <div className="space-y-3">
          {MOCK_ORDERS.map((order) => (
            <Link
              key={order.id}
              href={`/client/tracking/${order.id}`}
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-2">
                <p className="font-semibold text-gray-900">{order.description}</p>
                <span className="text-sm font-bold text-green-600">€{order.finalPrice}</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                📍 {order.deliveryAddress.label} • {order.createdAt.toLocaleDateString()}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">✅ {order.status}</span>
                <span className="text-xs text-gray-500">⭐ {order.rating}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
