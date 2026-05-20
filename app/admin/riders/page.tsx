'use client';

import { MOCK_RIDERS } from '@/data/mock';
import Link from 'next/link';

export default function RidersPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/admin" className="text-purple-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
            ← Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Riders</h1>
          <p className="text-gray-600 mt-1">Todos los repartidores de la plataforma</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_RIDERS.map((rider) => (
            <Link
              key={rider.id}
              href={`/admin/riders/${rider.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className={`h-24 bg-gradient-to-br ${rider.isAvailable ? 'from-green-400 to-green-600' : 'from-gray-400 to-gray-600'}`}></div>

              <div className="p-6 -mt-12 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{rider.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{rider.name}</h3>
                    <p className="text-xs text-gray-600">⭐ {rider.rating}</p>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full ${
                      rider.isAvailable ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  ></div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Entregas:</span>
                    <span className="font-bold text-gray-900">{rider.completedDeliveries}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vehículo:</span>
                    <span className="font-bold text-gray-900 capitalize">{rider.vehicleType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ingresos:</span>
                    <span className="font-bold text-green-600">€{rider.totalEarnings.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Ver Perfil →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
