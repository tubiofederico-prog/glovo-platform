'use client';

import { MOCK_RIDERS } from '@/data/mock';
import Link from 'next/link';

const rider = MOCK_RIDERS[0];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-12">
      <div className="max-w-md mx-auto px-4">
        <Link href="/rider" className="text-green-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
          ← Volver
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">{rider.avatar}</div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{rider.name}</h1>
              <p className="text-sm text-gray-600">⭐ {rider.rating} • {rider.completedDeliveries} entregas</p>
            </div>
          </div>

          <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <div>
                <p className="text-xs text-gray-600">Email</p>
                <p className="font-medium text-gray-900">{rider.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📱</span>
              <div>
                <p className="text-xs text-gray-600">Teléfono</p>
                <p className="font-medium text-gray-900">{rider.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🚴</span>
              <div>
                <p className="text-xs text-gray-600">Vehículo</p>
                <p className="font-medium text-gray-900 capitalize">{rider.vehicleType}</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border border-green-200 mb-6">
            <p className="text-sm font-semibold text-gray-900 mb-3">📊 Estadísticas</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Entregas completadas:</span>
                <span className="font-bold text-gray-900">{rider.completedDeliveries}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Ganancias totales:</span>
                <span className="font-bold text-gray-900">€{rider.totalEarnings.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Calificación:</span>
                <span className="font-bold text-gray-900">⭐ {rider.rating}</span>
              </div>
            </div>
          </div>

          <button className="w-full px-4 py-3 bg-red-50 text-red-700 rounded-lg font-semibold hover:bg-red-100 transition">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
