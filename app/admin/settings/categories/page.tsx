'use client';

import { MOCK_SERVICE_CATEGORIES } from '@/data/mock';
import Link from 'next/link';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/admin" className="text-purple-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
          ← Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Gestión de Categorías</h1>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-600 mb-6">Categorías de servicios disponibles en la plataforma.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_SERVICE_CATEGORIES.map((category) => (
              <div key={category.id} className="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <p className="font-semibold text-gray-900">{category.label}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Editar</button>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition">
            + Agregar Categoría
          </button>
        </div>
      </div>
    </div>
  );
}
