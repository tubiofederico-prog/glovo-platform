'use client';

import { useState } from 'react';
import { MOCK_RIDERS } from '@/data/mock';
import Link from 'next/link';

const currentRider = MOCK_RIDERS[0];

export function HomeRider() {
  const [isAvailable, setIsAvailable] = useState(true);

  const availableOrders = [
    {
      id: 'order_r1',
      distance: 2.3,
      earnings: 6.99,
      pickupAddress: 'Calle Velázquez, 120',
      deliveryAddress: 'Gran Vía, 150',
      serviceType: 'package',
      description: 'Paquete pequeño',
    },
    {
      id: 'order_r2',
      distance: 1.8,
      earnings: 5.99,
      pickupAddress: 'Calle Mayor, 50',
      deliveryAddress: 'Paseo del Retiro, 10',
      serviceType: 'shopping',
      description: 'Compras de supermercado',
    },
    {
      id: 'order_r3',
      distance: 3.2,
      earnings: 8.99,
      pickupAddress: 'Tienda Local',
      deliveryAddress: 'Zona Salamanca',
      serviceType: 'package',
      description: 'Entrega urgente',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-20">
      <div className="max-w-md mx-auto px-4">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-4xl">{currentRider.avatar}</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{currentRider.name}</h1>
                <p className="text-sm text-gray-600">⭐ {currentRider.rating} • {currentRider.completedDeliveries} entregas</p>
              </div>
            </div>
            <Link href="/rider/profile" className="text-blue-600 hover:text-blue-700">
              ⚙️
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900">Estado</h2>
            <button
              onClick={() => setIsAvailable(!isAvailable)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                isAvailable
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              {isAvailable ? '🟢 Disponible' : '🔴 No disponible'}
            </button>
          </div>

          {isAvailable && (
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Ganancias hoy:</span>
                <span className="font-bold text-green-700">€{(6.99 + 5.99).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Pedidos completados:</span>
                <span className="font-bold text-gray-900">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Distancia recorrida:</span>
                <span className="font-bold text-gray-900">18.5 km</span>
              </div>
            </div>
          )}
        </div>

        {isAvailable && (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Pedidos Disponibles</h3>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                  {availableOrders.length}
                </span>
              </div>

              <div className="space-y-3">
                {availableOrders.map((order) => (
                  <Link
                    key={order.id}
                    href={`/rider/order/${order.id}`}
                    className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-lg transition"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-bold text-gray-900">{order.description}</p>
                        <p className="text-xs text-gray-600 mt-1">
                          {order.serviceType === 'package' ? '📦' : '🛒'} {order.serviceType}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">€{order.earnings.toFixed(2)}</p>
                        <p className="text-xs text-gray-600">{order.distance} km</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm mb-3">
                      <div className="flex items-center gap-2 text-gray-700">
                        <span>📍 Retiro:</span>
                        <span className="font-medium">{order.pickupAddress}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span>🎯 Entrega:</span>
                        <span className="font-medium">{order.deliveryAddress}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-red-50 text-red-700 rounded-lg font-medium hover:bg-red-100 transition text-sm">
                        Rechazar
                      </button>
                      <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition text-sm">
                        Aceptar
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        {!isAvailable && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 font-medium mb-4">Estás desconectado</p>
            <p className="text-sm text-gray-600 mb-6">Cambia tu estado a "Disponible" para ver pedidos</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/rider/history"
            className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition"
          >
            <div className="text-2xl mb-1">📋</div>
            <p className="text-xs font-medium text-gray-700">Historial</p>
          </Link>
          <Link
            href="/rider/earnings"
            className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition"
          >
            <div className="text-2xl mb-1">💰</div>
            <p className="text-xs font-medium text-gray-700">Ganancias</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
