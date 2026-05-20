'use client';

import { MOCK_ACTIVE_ORDERS, MOCK_ORDERS } from '@/data/mock';
import Link from 'next/link';

const allOrders = [...MOCK_ORDERS, ...MOCK_ACTIVE_ORDERS];

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/admin" className="text-purple-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
            ← Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Pedidos</h1>
          <p className="text-gray-600 mt-1">Todos los pedidos de la plataforma</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Pedidos Activos</h2>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {MOCK_ACTIVE_ORDERS.length}
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Rider</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Servicio</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Precio</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {allOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-mono text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Juan García</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {order.riderId ? 'Carlos López' : '—'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 capitalize">
                      {order.serviceType}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'delivered'
                            ? 'bg-green-100 text-green-700'
                            : order.status === 'searching'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">
                      €{order.estimatedPrice.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Link href={`/admin/orders/${order.id}`} className="text-blue-600 hover:text-blue-700 font-medium">
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
