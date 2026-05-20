'use client';

import { MOCK_ADMIN_KPI, MOCK_RIDERS, MOCK_ACTIVE_ORDERS } from '@/data/mock';
import Link from 'next/link';

export function Dashboard() {
  const kpis = [
    {
      label: 'Pedidos Activos',
      value: MOCK_ADMIN_KPI.activeOrders,
      icon: '📦',
      color: 'from-blue-500 to-blue-600',
      trend: '+12%',
    },
    {
      label: 'Riders Conectados',
      value: MOCK_ADMIN_KPI.connectedRiders,
      icon: '🚴',
      color: 'from-green-500 to-green-600',
      trend: '+3',
    },
    {
      label: 'Ingresos Hoy',
      value: `€${MOCK_ADMIN_KPI.todayRevenue.toFixed(2)}`,
      icon: '💰',
      color: 'from-purple-500 to-purple-600',
      trend: '+8%',
    },
    {
      label: 'Pedidos Completados',
      value: MOCK_ADMIN_KPI.completedOrders,
      icon: '✅',
      color: 'from-emerald-500 to-emerald-600',
      trend: '+5',
    },
  ];

  const recentOrders = MOCK_ACTIVE_ORDERS.slice(0, 5);
  const availableRiders = MOCK_RIDERS.filter((r) => r.isAvailable);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Administrativo</h1>
          <p className="text-gray-600 mt-1">Gestión en tiempo real de la plataforma</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className={`bg-gradient-to-br ${kpi.color} rounded-xl p-6 text-white shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm opacity-90 font-medium">{kpi.label}</p>
                  <p className="text-3xl font-bold mt-2">{kpi.value}</p>
                  <p className="text-xs opacity-75 mt-2">
                    <span className="text-green-200 font-semibold">{kpi.trend}</span> desde ayer
                  </p>
                </div>
                <span className="text-4xl opacity-30">{kpi.icon}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Mapa Operativo</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Actualizar
                </button>
              </div>
              <div className="h-72 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl mb-2">🗺️</div>
                  <p className="text-gray-600 font-medium">Mapa en Tiempo Real</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {availableRiders.length} riders activos • {MOCK_ADMIN_KPI.activeOrders} pedidos en ruta
                  </p>
                </div>

                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10 pointer-events-none">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="border border-gray-400"></div>
                  ))}
                </div>

                <div className="absolute top-1/3 left-1/4 text-2xl animate-pulse">🚴</div>
                <div className="absolute top-2/3 right-1/3 text-2xl animate-pulse">🚗</div>
                <div className="absolute bottom-1/4 left-1/3 text-2xl animate-pulse">🏍️</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Pedidos Activos</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Cliente</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Rider</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Estado</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-sm font-mono text-gray-900">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Juan García</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {order.riderId ? 'Carlos López' : 'Sin asignar'}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              order.status === 'delivered'
                                ? 'bg-green-100 text-green-700'
                                : order.status === 'searching'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <Link href={`/admin/orders/${order.id}`} className="text-blue-600 hover:text-blue-700 font-medium">
                            Ver
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-gray-200 text-center">
                <Link href="/admin/orders" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Ver todos los pedidos
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Riders Disponibles</h2>
                <p className="text-sm text-gray-600 mt-1">{availableRiders.length} en línea</p>
              </div>
              <div className="divide-y divide-gray-200">
                {availableRiders.map((rider) => (
                  <Link
                    key={rider.id}
                    href={`/admin/riders/${rider.id}`}
                    className="p-4 hover:bg-gray-50 transition block"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl">{rider.avatar}</div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{rider.name}</p>
                          <p className="text-xs text-gray-600">⭐ {rider.rating}</p>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200 text-center">
                <Link href="/admin/riders" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Gestionar riders
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Alertas</h2>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="p-4 bg-red-50 border-l-4 border-red-500">
                  <p className="text-sm font-semibold text-red-900">⚠️ Pedido demorado</p>
                  <p className="text-xs text-red-700 mt-1">Order #order_active_001 lleva 25 min</p>
                </div>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                  <p className="text-sm font-semibold text-yellow-900">⏱️ Baja disponibilidad</p>
                  <p className="text-xs text-yellow-700 mt-1">Solo 1 rider disponible en zona norte</p>
                </div>
                <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                  <p className="text-sm font-semibold text-blue-900">ℹ️ Sistema normal</p>
                  <p className="text-xs text-blue-700 mt-1">Operaciones sin incidencias</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Acciones Rápidas</h2>
              </div>
              <div className="p-4 space-y-2">
                <Link
                  href="/admin/settings/tariffs"
                  className="block w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-gray-900 transition text-sm text-center"
                >
                  ⚙️ Configurar Tarifas
                </Link>
                <Link
                  href="/admin/settings/categories"
                  className="block w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-gray-900 transition text-sm text-center"
                >
                  📂 Gestionar Categorías
                </Link>
                <Link
                  href="/admin/reports"
                  className="block w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-gray-900 transition text-sm text-center"
                >
                  📊 Ver Reportes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
