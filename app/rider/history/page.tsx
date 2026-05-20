'use client';

import Link from 'next/link';

export default function HistoryPage() {
  const completedDeliveries = [
    { id: 1, client: 'Juan García', amount: 6.99, status: 'Entregado', time: '14:30' },
    { id: 2, client: 'María López', amount: 5.99, status: 'Entregado', time: '14:05' },
    { id: 3, client: 'Carlos Díaz', amount: 8.99, status: 'Entregado', time: '13:45' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-12">
      <div className="max-w-md mx-auto px-4">
        <Link href="/rider" className="text-green-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
          ← Volver
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Historial de Entregas</h1>

        <div className="space-y-3">
          {completedDeliveries.map((delivery) => (
            <div key={delivery.id} className="p-4 bg-white rounded-lg border border-gray-200 hover:border-green-500 transition">
              <div className="flex items-start justify-between mb-2">
                <p className="font-semibold text-gray-900">{delivery.client}</p>
                <span className="text-sm font-bold text-green-600">€{delivery.amount.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">✅ {delivery.status}</span>
                <span className="text-xs text-gray-500">{delivery.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
