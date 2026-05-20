'use client';

import Link from 'next/link';

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20 pb-12 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="mb-8 animate-pulse">
          <div className="text-6xl mb-4">✅</div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">¡Pedido Confirmado!</h1>
        <p className="text-gray-600 mb-8">
          Tu pedido ha sido creado exitosamente. Estamos buscando un rider disponible.
        </p>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-2 border-green-500">
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Número de Pedido</p>
            <p className="text-3xl font-bold text-gray-900">ORDER#2024001</p>
          </div>

          <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📦</span>
              <div className="text-left">
                <p className="text-xs text-gray-600">Paquete pequeño</p>
                <p className="font-semibold text-gray-900">Descripción del paquete</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">💰</span>
              <div className="text-left">
                <p className="text-xs text-gray-600">Costo estimado</p>
                <p className="font-semibold text-gray-900">€8.99</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏱️</span>
              <div className="text-left">
                <p className="text-xs text-gray-600">Entrega estimada</p>
                <p className="font-semibold text-gray-900">25-35 minutos</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <p className="text-sm font-semibold text-yellow-900 mb-2">🔍 Estado</p>
            <p className="text-xs text-yellow-700">
              Buscando rider disponible en tu zona...
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/client/tracking/order_active_002"
            className="w-full block py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Ver Rastreo
          </Link>
          <Link
            href="/client"
            className="w-full block py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
