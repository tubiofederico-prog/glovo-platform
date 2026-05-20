'use client';

import { MOCK_CLIENT } from '@/data/mock';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-12">
      <div className="max-w-md mx-auto px-4">
        <Link href="/client" className="text-blue-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
          ← Volver
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">{MOCK_CLIENT.avatar}</div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{MOCK_CLIENT.name}</h1>
              <p className="text-sm text-gray-600">⭐ {MOCK_CLIENT.rating} • {MOCK_CLIENT.completedOrders} entregas</p>
            </div>
          </div>

          <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <div>
                <p className="text-xs text-gray-600">Email</p>
                <p className="font-medium text-gray-900">{MOCK_CLIENT.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📱</span>
              <div>
                <p className="text-xs text-gray-600">Teléfono</p>
                <p className="font-medium text-gray-900">{MOCK_CLIENT.phone}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-gray-900 mb-3">📍 Direcciones Guardadas</p>
            <div className="space-y-2">
              {MOCK_CLIENT.savedAddresses.map((addr) => (
                <div key={addr.id} className="text-sm">
                  <p className="font-medium text-gray-900">{addr.label}</p>
                  <p className="text-xs text-gray-600">{addr.address}</p>
                </div>
              ))}
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
