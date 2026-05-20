'use client';

import Link from 'next/link';

export default function TariffsPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/admin" className="text-purple-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
          ← Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Configuración de Tarifas</h1>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-600 mb-6">Gestiona las tarifas de envío y comisiones de la plataforma.</p>

          <div className="space-y-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <label className="block font-semibold text-gray-900 mb-2">Tarifa Base</label>
              <input type="number" placeholder="€4.99" defaultValue="4.99" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <label className="block font-semibold text-gray-900 mb-2">Tarifa por Km</label>
              <input type="number" placeholder="€0.50" defaultValue="0.50" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <label className="block font-semibold text-gray-900 mb-2">Comisión Plataforma (%)</label>
              <input type="number" placeholder="30" defaultValue="30" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>

            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
