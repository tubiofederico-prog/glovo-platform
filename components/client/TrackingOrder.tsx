'use client';

import { useState } from 'react';
import { MOCK_ACTIVE_ORDERS, MOCK_RIDERS } from '@/data/mock';
import Link from 'next/link';

export function TrackingOrder({ orderId }: { orderId: string }) {
  const order = MOCK_ACTIVE_ORDERS.find((o) => o.id === orderId);
  const rider = order?.riderId ? MOCK_RIDERS.find((r) => r.id === order.riderId) : null;
  const [showChat, setShowChat] = useState(false);

  if (!order) {
    return <div className="pt-20 max-w-md mx-auto text-center py-12">Pedido no encontrado</div>;
  }

  const statusSteps = [
    { key: 'created', label: 'Creado', icon: '📋' },
    { key: 'assigned', label: 'Asignado', icon: '✅' },
    { key: 'heading_to_pickup', label: 'En camino a retiro', icon: '🚴' },
    { key: 'picked_up', label: 'Recogido', icon: '📦' },
    { key: 'heading_to_delivery', label: 'En camino', icon: '🚗' },
    { key: 'delivered', label: 'Entregado', icon: '✨' },
  ];

  const currentStepIndex = statusSteps.findIndex((s) => s.key === order.status);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-20">
      <div className="max-w-md mx-auto px-4">
        <Link href="/client" className="text-blue-600 text-sm font-medium mb-4 inline-flex items-center gap-1 hover:text-blue-700">
          ← Volver
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 relative">
            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">📦</div>
          </div>

          <div className="p-6 -mt-16 relative z-10">
            <div className="bg-green-100 text-green-700 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3">
              En Camino
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{order.description}</h2>
            <p className="text-gray-600 text-sm mb-4">Pedido #{order.id}</p>

            {rider && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                <p className="text-xs text-gray-600 mb-2 font-medium">RIDER ASIGNADO</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{rider.avatar}</div>
                    <div>
                      <p className="font-bold text-gray-900">{rider.name}</p>
                      <p className="text-xs text-gray-600">⭐ {rider.rating} • {rider.vehicleType}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl">🟢</div>
                    <p className="text-xs text-green-700 font-semibold">En línea</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Progreso de Entrega</h3>
          <div className="space-y-3">
            {statusSteps.map((step, index) => (
              <div key={step.key} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      index <= currentStepIndex
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step.icon}
                  </div>
                  {index < statusSteps.length - 1 && (
                    <div
                      className={`w-0.5 h-12 mt-2 ${
                        index < currentStepIndex ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>
                <div className="pt-1">
                  <p className={`font-medium ${index <= currentStepIndex ? 'text-gray-900' : 'text-gray-600'}`}>
                    {step.label}
                  </p>
                  {index === currentStepIndex && (
                    <p className="text-xs text-blue-600 font-semibold">En progreso...</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Mapa de Entrega</h3>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-48 flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <div className="text-6xl mb-2">🗺️</div>
              <p className="text-gray-600 font-medium">Simulación de Mapa</p>
              <p className="text-xs text-gray-500 mt-1">Tu rider está 2.5 km de distancia</p>
            </div>
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-md">
              7 min
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setShowChat(true)}
            className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition font-medium text-blue-700"
          >
            💬 Chat
          </button>
          <button className="p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition font-medium text-green-700">
            ☎️ Llamar
          </button>
        </div>

        {showChat && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
            <div className="w-full bg-white rounded-t-2xl shadow-2xl max-h-96">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Chat con {rider?.name}</h3>
                <button
                  onClick={() => setShowChat(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>
              <div className="h-48 overflow-y-auto p-4 space-y-3 bg-gray-50">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs text-sm">
                    Estoy en el destino?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg max-w-xs text-sm">
                    Casi llegó! Estoy a 5 minutos
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200 flex gap-2">
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <button className="w-full text-red-700 font-semibold text-sm hover:text-red-800 transition">
            ❌ Cancelar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
