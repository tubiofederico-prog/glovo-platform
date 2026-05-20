'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RiderOrderPage({ params }: { params: { orderId: string } }) {
  const [currentStep, setCurrentStep] = useState<string>('accepted');

  const order = {
    id: params.orderId,
    clientName: 'Juan García',
    clientRating: 4.8,
    description: 'Paquete pequeño',
    pickupAddress: 'Calle Velázquez, 120',
    deliveryAddress: 'Gran Vía, 150',
    distance: 2.3,
    earnings: 6.99,
    serviceType: 'package',
  };

  const steps = ['accepted', 'heading_to_pickup', 'arrived_pickup', 'picked_up', 'heading_to_delivery', 'arrived_delivery', 'delivered'];
  const stepLabels = [
    { key: 'accepted', label: 'Aceptado', icon: '✅' },
    { key: 'heading_to_pickup', label: 'En camino a retiro', icon: '🚴' },
    { key: 'arrived_pickup', label: 'Llegué al retiro', icon: '📍' },
    { key: 'picked_up', label: 'Recogido', icon: '📦' },
    { key: 'heading_to_delivery', label: 'En camino a entrega', icon: '🚗' },
    { key: 'arrived_delivery', label: 'Llegué al destino', icon: '📍' },
    { key: 'delivered', label: 'Entregado', icon: '✨' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-12">
      <div className="max-w-md mx-auto px-4">
        <Link href="/rider" className="text-green-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
          ← Volver
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="h-32 bg-gradient-to-br from-green-400 to-green-600"></div>
          <div className="p-6 -mt-16 relative z-10">
            <div className="bg-green-100 text-green-700 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3">
              Activo
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{order.description}</h2>
            <p className="text-gray-600 text-sm mb-4">Cliente: {order.clientName} ⭐ {order.clientRating}</p>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-2xl font-bold text-green-600 mb-2">€{order.earnings.toFixed(2)}</p>
              <p className="text-xs text-gray-600">{order.distance} km • {Math.round(order.distance / 2)} min estimado</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Progreso</h3>
          <div className="space-y-3">
            {stepLabels.map((step, index) => {
              const stepIndex = steps.indexOf(step.key);
              const currentStepIndex = steps.indexOf(currentStep);
              const isCompleted = stepIndex < currentStepIndex;
              const isCurrent = stepIndex === currentStepIndex;

              return (
                <div key={step.key} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        isCompleted || isCurrent
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {step.icon}
                    </div>
                    {index < stepLabels.length - 1 && (
                      <div
                        className={`w-0.5 h-12 mt-2 ${isCompleted ? 'bg-green-600' : 'bg-gray-200'}`}
                      ></div>
                    )}
                  </div>
                  <div className="pt-1">
                    <p className={`font-medium ${isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-600'}`}>
                      {step.label}
                    </p>
                    {isCurrent && (
                      <p className="text-xs text-green-600 font-semibold">Tu paso actual</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Dirección del Paquete</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-xs text-gray-600 font-semibold uppercase mb-1">Retiro</p>
              <p className="font-bold text-gray-900">{order.pickupAddress}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <p className="text-xs text-gray-600 font-semibold uppercase mb-1">Entrega</p>
              <p className="font-bold text-gray-900">{order.deliveryAddress}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition font-medium text-blue-700 text-sm">
            💬 Chat
          </button>
          <button className="p-3 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition font-medium text-green-700 text-sm">
            ☎️ Llamar
          </button>
        </div>

        {currentStep !== 'delivered' && (
          <button
            onClick={() => {
              const currentIndex = steps.indexOf(currentStep);
              if (currentIndex < steps.length - 1) {
                setCurrentStep(steps[currentIndex + 1]);
              }
            }}
            className="w-full py-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
          >
            ✓ Siguiente Paso
          </button>
        )}

        {currentStep === 'delivered' && (
          <div className="text-center py-8 bg-green-50 rounded-xl border-2 border-green-500">
            <p className="text-2xl mb-2">✨</p>
            <p className="font-bold text-green-700">¡Entrega Completada!</p>
          </div>
        )}
      </div>
    </div>
  );
}
