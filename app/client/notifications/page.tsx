'use client';

import { MOCK_NOTIFICATIONS } from '@/data/mock';
import Link from 'next/link';

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-12">
      <div className="max-w-md mx-auto px-4">
        <Link href="/client" className="text-blue-600 text-sm font-medium mb-4 inline-flex items-center gap-1">
          ← Volver
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Notificaciones</h1>

        <div className="space-y-3">
          {MOCK_NOTIFICATIONS.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 rounded-lg border ${
                notif.read
                  ? 'bg-gray-50 border-gray-200'
                  : 'bg-blue-50 border-blue-300'
              }`}
            >
              <p className="font-semibold text-gray-900">{notif.title}</p>
              <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
              <p className="text-xs text-gray-500 mt-2">
                {notif.timestamp.toLocaleTimeString('es-ES')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
