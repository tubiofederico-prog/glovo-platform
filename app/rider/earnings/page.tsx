'use client';

import Link from 'next/link';

export default function EarningsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-12">
      <div className="max-w-md mx-auto px-4">
        <Link href="/rider" className="text-green-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
          ← Volver
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Mis Ganancias</h1>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
            <p className="text-sm opacity-90 mb-2">Ganancias Totales (Mes)</p>
            <p className="text-4xl font-bold">€2,450.00</p>
            <p className="text-xs opacity-75 mt-2">287 entregas completadas</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-xs text-gray-600 mb-2">Hoy</p>
              <p className="text-2xl font-bold text-gray-900">€29.98</p>
              <p className="text-xs text-gray-600 mt-1">4 entregas</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-xs text-gray-600 mb-2">Esta Semana</p>
              <p className="text-2xl font-bold text-gray-900">€187.50</p>
              <p className="text-xs text-gray-600 mt-1">27 entregas</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-4">Detalles del Mes</p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Ingresos por entregas:</span>
                <span className="font-bold text-gray-900">€2,450.00</span>
              </div>
              <div className="flex justify-between text-sm border-t pt-3">
                <span className="text-gray-700">Calificación promedio:</span>
                <span className="font-bold text-gray-900">⭐ 4.9</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Entregas completadas:</span>
                <span className="font-bold text-gray-900">287</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Distancia recorrida:</span>
                <span className="font-bold text-gray-900">1,287 km</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm font-semibold text-blue-900 mb-2">💳 Próximo Pago</p>
            <p className="text-xs text-blue-700">Será procesado el viernes 20 de mayo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
