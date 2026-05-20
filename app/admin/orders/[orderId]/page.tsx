'use client';

import { MOCK_ACTIVE_ORDERS, MOCK_ORDERS } from '@/data/mock';
import Link from 'next/link';

export default function OrderDetailPage({ params }: { params: { orderId: string } }) {
  const allOrders = [...MOCK_ORDERS, ...MOCK_ACTIVE_ORDERS];
  const order = allOrders.find((o) => o.id === params.orderId);

  if (!order) {
    return (
      <div className="pt-40 max-w-md mx-auto text-center">
        <p>Pedido no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/admin/orders" className="text-purple-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
          ← Volver
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{order.description}</h1>
              <p className="text-gray-600 mb-6">Pedido #{order.id}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-xs text-gray-600 font-semibold mb-2">RETIRO</p>
                  <p className="font-bold text-gray-900">{order.pickupAddress.address}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <p className="text-xs text-gray-600 font-semibold mb-2">ENTREGA</p>
                  <p className="font-bold text-gray-900">{order.deliveryAddress.address}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Detalles Financieros</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Precio estimado:</span>
                    <span className="font-bold text-gray-900">€{order.estimatedPrice.toFixed(2)}</span>
                  </div>
                  {order.finalPrice && (
                    <div className="flex justify-between">
                      <span className="text-gray-700">Precio final:</span>
                      <span className="font-bold text-gray-900">€{order.finalPrice.toFixed(2)}</span>
                    </div>
                  )}
                  {order.commission && (
                    <div className="flex justify-between">
                      <span className="text-gray-700">Comisión plataforma:</span>
                      <span className="font-bold text-gray-900">€{order.commission.toFixed(2)}</span>
                    </div>
                  )}
                  {order.riderEarnings && (
                    <div className="flex justify-between border-t pt-3">
                      <span className="text-gray-700">Ganancia rider:</span>
                      <span className="font-bold text-green-600">€{order.riderEarnings.toFixed(2)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Pedido Creado</p>
                    <p className="text-sm text-gray-600">
                      {order.createdAt?.toLocaleString('es-ES')}
                    </p>
                  </div>
                </div>
                {order.acceptedAt && (
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Aceptado por Rider</p>
                      <p className="text-sm text-gray-600">
                        {order.acceptedAt?.toLocaleString('es-ES')}
                      </p>
                    </div>
                  </div>
                )}
                {order.pickedUpAt && (
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Paquete Recogido</p>
                      <p className="text-sm text-gray-600">
                        {order.pickedUpAt?.toLocaleString('es-ES')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Estado</h3>
              <div
                className={`px-4 py-2 rounded-lg font-semibold text-center mb-4 ${
                  order.status === 'delivered'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {order.status}
              </div>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm">
                  Asignar Rider
                </button>
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition text-sm">
                  Reasignar
                </button>
                <button className="w-full px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition text-sm">
                  Cancelar
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Cliente</h3>
              <div className="space-y-2 text-sm">
                <p>Juan García</p>
                <p className="text-gray-600">juan@example.com</p>
                <p className="text-gray-600">⭐ 4.8 • 42 pedidos</p>
              </div>
            </div>

            {order.riderId && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Rider Asignado</h3>
                <div className="space-y-2 text-sm">
                  <p>Carlos López</p>
                  <p className="text-gray-600">⭐ 4.9 • 287 entregas</p>
                  <p className="text-gray-600">🚴 Bicicleta</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
