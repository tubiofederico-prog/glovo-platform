'use client';

import { MOCK_RIDERS } from '@/data/mock';
import Link from 'next/link';

export default function RiderDetailPage({ params }: { params: { riderId: string } }) {
  const rider = MOCK_RIDERS.find((r) => r.id === params.riderId);

  if (!rider) {
    return <div className="pt-40 max-w-md mx-auto text-center">Rider no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/admin/riders" className="text-purple-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
          ← Volver
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="h-32 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6 -mt-20 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-6xl">{rider.avatar}</div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{rider.name}</h1>
                    <p className="text-sm text-gray-600">⭐ {rider.rating}</p>
                    <div className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-semibold ${rider.isAvailable ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {rider.isAvailable ? '🟢 Disponible' : '🔴 No disponible'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Información Personal</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="font-bold text-gray-900">{rider.email}</p>
                </div>
                <div>
                  <p className="text-gray-600">Teléfono</p>
                  <p className="font-bold text-gray-900">{rider.phone}</p>
                </div>
                <div>
                  <p className="text-gray-600">Vehículo</p>
                  <p className="font-bold text-gray-900 capitalize">{rider.vehicleType}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Estadísticas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-xs text-gray-600 font-semibold mb-2">ENTREGAS COMPLETADAS</p>
                  <p className="text-3xl font-bold text-blue-600">{rider.completedDeliveries}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-xs text-gray-600 font-semibold mb-2">INGRESOS TOTALES</p>
                  <p className="text-3xl font-bold text-green-600">€{rider.totalEarnings.toFixed(0)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Estado</h3>
              <div className={`px-4 py-3 rounded-lg font-semibold text-center mb-4 ${rider.isAvailable ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                {rider.isAvailable ? '🟢 En línea' : '🔴 Offline'}
              </div>
              <button className={`w-full px-4 py-2 rounded-lg font-medium transition text-sm ${rider.isAvailable ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}>
                {rider.isAvailable ? 'Desconectar' : 'Conectar'}
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Calificación</h3>
              <div className="text-center mb-4">
                <p className="text-5xl font-bold text-yellow-500">⭐ {rider.rating}</p>
              </div>
              <p className="text-sm text-gray-600 text-center">
                {rider.completedDeliveries > 100 ? 'Excelente desempeño' : 'Buen desempeño'}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Acciones</h3>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm">
                  Enviar Mensaje
                </button>
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition text-sm">
                  Ver Historial
                </button>
                <button className="w-full px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition text-sm">
                  Suspender
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
