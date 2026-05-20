'use client';

import { MOCK_SERVICE_CATEGORIES, MOCK_CLIENT } from '@/data/mock';
import Link from 'next/link';

export function HomeClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">{MOCK_CLIENT.avatar}</div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{MOCK_CLIENT.name}</h1>
              <p className="text-sm text-gray-600">⭐ {MOCK_CLIENT.rating} • {MOCK_CLIENT.completedOrders} entregas</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="¿Dónde enviaremos hoy?"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Servicios Disponibles</h2>
          <div className="grid grid-cols-2 gap-4">
            {MOCK_SERVICE_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/client/order?service=${category.id}`}
                className={`p-4 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer`}
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <p className="font-semibold text-sm">{category.label}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 mb-8 border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-3">Pedidos Activos</h3>
          <div className="space-y-2">
            <Link
              href="/client/tracking/order_active_001"
              className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition"
            >
              <p className="text-sm font-medium text-gray-900">Paquete de ropa 📦</p>
              <p className="text-xs text-gray-600">Rider: Carlos López • 🚴</p>
              <p className="text-xs text-green-600 font-medium mt-1">Recogido - En camino</p>
            </Link>
            <Link
              href="/client/tracking/order_active_002"
              className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition"
            >
              <p className="text-sm font-medium text-gray-900">Documentos urgentes 📄</p>
              <p className="text-xs text-gray-600">Buscando rider...</p>
              <p className="text-xs text-yellow-600 font-medium mt-1">Creado - Buscando</p>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <Link
            href="/client/history"
            className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition"
          >
            <div className="text-2xl mb-1">📋</div>
            <p className="text-xs font-medium text-gray-700">Historial</p>
          </Link>
          <Link
            href="/client/profile"
            className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition"
          >
            <div className="text-2xl mb-1">👤</div>
            <p className="text-xs font-medium text-gray-700">Perfil</p>
          </Link>
          <Link
            href="/client/notifications"
            className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition relative"
          >
            <div className="text-2xl mb-1">🔔</div>
            <p className="text-xs font-medium text-gray-700">Notificaciones</p>
            <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
