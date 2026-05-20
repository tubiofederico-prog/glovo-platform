'use client';

import { useState } from 'react';
import { MOCK_CLIENT } from '@/data/mock';
import Link from 'next/link';

export function CreateOrder({ serviceType }: { serviceType?: string }) {
  const [step, setStep] = useState(1);
  const [stops, setStops] = useState(1);
  const [description, setDescription] = useState('');
  const [packageType, setPackageType] = useState('medium');

  const estimatedPrice = 8.99;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-md mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {step === 1 ? 'Dirección de Retiro' : step === 2 ? 'Dirección de Entrega' : 'Detalles del Pedido'}
          </h1>
          <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            Paso {step} de 4
          </span>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm font-medium text-gray-700 mb-2">📍 Mi Ubicación Actual</p>
              <p className="text-gray-900 font-semibold">{MOCK_CLIENT.savedAddresses[0].address}</p>
              <p className="text-xs text-gray-600 mt-1">{MOCK_CLIENT.savedAddresses[0].details}</p>
              <button className="w-full mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                Usar esta ubicación
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">O</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Otra dirección de retiro</label>
              <input
                type="text"
                placeholder="Buscar dirección..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-3 space-y-2">
                {MOCK_CLIENT.savedAddresses.map((addr) => (
                  <button
                    key={addr.id}
                    className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition"
                  >
                    <p className="font-medium text-gray-900">{addr.label}</p>
                    <p className="text-sm text-gray-600">{addr.address}</p>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Continuar
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white mb-6">
              <p className="text-sm opacity-90">Recogida en:</p>
              <p className="font-semibold">{MOCK_CLIENT.savedAddresses[0].address}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dirección de Entrega</label>
              <input
                type="text"
                placeholder="Buscar dirección de entrega..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-3 space-y-2">
                <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition">
                  <p className="font-medium text-gray-900">Oficina</p>
                  <p className="text-sm text-gray-600">Av. Paseo de la Castellana, 40, Madrid</p>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition">
                  <p className="font-medium text-gray-900">Tienda</p>
                  <p className="text-sm text-gray-600">Calle Serrano, 78, Madrid</p>
                </button>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <p className="text-sm font-medium text-gray-700 mb-2">➕ Agregar Parada</p>
              <p className="text-xs text-gray-600 mb-3">Puedes añadir más paradas al recorrido</p>
              <button
                onClick={() => setStops(stops + 1)}
                disabled={stops >= 3}
                className="w-full px-3 py-2 border-2 border-dashed border-yellow-400 rounded-lg text-yellow-700 font-medium hover:bg-yellow-50 transition disabled:opacity-50"
              >
                {stops === 1 ? 'Agregar parada adicional' : `Paradas: ${stops}`}
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Atrás
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descripción del Paquete</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe lo que vas a enviar..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Paquete</label>
              <div className="grid grid-cols-2 gap-3">
                {['small', 'medium', 'large', 'box'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setPackageType(type)}
                    className={`p-3 rounded-lg font-medium transition ${
                      packageType === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type === 'small' && '📦 Pequeño'}
                    {type === 'medium' && '📦 Medio'}
                    {type === 'large' && '📦 Grande'}
                    {type === 'box' && '📫 Caja'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Instrucciones Especiales</label>
              <textarea
                placeholder="Ej: Frágil, Mantener refrigerado, Solo dejar con portero..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={2}
              />
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm font-medium text-gray-700 mb-2">📷 Foto del Paquete (Opcional)</p>
              <button className="w-full px-4 py-3 border-2 border-dashed border-blue-300 rounded-lg text-blue-600 font-medium hover:bg-blue-50 transition">
                📸 Agregar foto
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Atrás
              </button>
              <button
                onClick={() => setStep(4)}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Resumen del Pedido</h2>

              <div className="space-y-3 mb-4 pb-4 border-b border-blue-200">
                <div className="flex justify-between">
                  <span className="text-gray-700">📍 Retiro:</span>
                  <span className="font-semibold text-gray-900">{MOCK_CLIENT.savedAddresses[0].label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">🎯 Entrega:</span>
                  <span className="font-semibold text-gray-900">Dirección destino</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">📦 Tipo:</span>
                  <span className="font-semibold text-gray-900 capitalize">{packageType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">⏱️ Tiempo estimado:</span>
                  <span className="font-semibold text-gray-900">25-35 min</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Tarifa base:</span>
                  <span className="font-semibold">€4.99</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-700">Distancia:</span>
                  <span className="font-semibold">€2.50</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-bold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-blue-600">€{estimatedPrice.toFixed(2)}</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 text-center mb-4">El precio puede variar según disponibilidad de rider</p>
            </div>

            <Link
              href="/client/order-confirmation"
              className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition text-center"
            >
              Confirmar Pedido • €{estimatedPrice.toFixed(2)}
            </Link>

            <button
              onClick={() => setStep(3)}
              className="w-full py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Atrás
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
