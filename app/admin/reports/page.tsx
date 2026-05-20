'use client';

import Link from 'next/link';

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <Link href="/admin" className="text-purple-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
          ← Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reportes y Estadísticas</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Pedidos por Día</h3>
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Gráfico de Pedidos</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Ingresos Mensuales</h3>
            <div className="h-48 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Gráfico de Ingresos</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Top Riders</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Carlos López</span>
                <span className="font-bold">287 entregas</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Antonio Sánchez</span>
                <span className="font-bold">412 entregas</span>
              </div>
              <div className="flex justify-between items-center">
                <span>María Rodríguez</span>
                <span className="font-bold">156 entregas</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Servicios Más Usados</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>📦 Envíos</span>
                <span className="font-bold">45%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🛒 Compras por Encargo</span>
                <span className="font-bold">30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🏬 Supermercado</span>
                <span className="font-bold">25%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Exportar Reportes</h3>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Descargar PDF
            </button>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
              Descargar Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
