'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const getActiveRole = () => {
    if (pathname.startsWith('/client')) return 'client';
    if (pathname.startsWith('/rider')) return 'rider';
    if (pathname.startsWith('/admin')) return 'admin';
    return null;
  };

  const active = getActiveRole();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-xl text-gray-900">Glovo Platform</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/client"
              className={`px-4 py-2 rounded-lg font-medium transition ${
                active === 'client'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              👨‍💼 Cliente
            </Link>
            <Link
              href="/rider"
              className={`px-4 py-2 rounded-lg font-medium transition ${
                active === 'rider'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              🚴 Rider
            </Link>
            <Link
              href="/admin"
              className={`px-4 py-2 rounded-lg font-medium transition ${
                active === 'admin'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              📊 Admin
            </Link>
          </div>

          <div className="md:hidden flex gap-2">
            <Link
              href="/client"
              className={`px-2 py-1 rounded text-sm font-medium ${
                active === 'client' ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
              }`}
            >
              Cliente
            </Link>
            <Link
              href="/rider"
              className={`px-2 py-1 rounded text-sm font-medium ${
                active === 'rider' ? 'bg-green-100 text-green-700' : 'text-gray-700'
              }`}
            >
              Rider
            </Link>
            <Link
              href="/admin"
              className={`px-2 py-1 rounded text-sm font-medium ${
                active === 'admin' ? 'bg-purple-100 text-purple-700' : 'text-gray-700'
              }`}
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
