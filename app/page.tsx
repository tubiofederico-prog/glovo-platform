import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="text-7xl mb-4">🚀</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Glovo Platform
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Prototipo Visual Semifuncional
          </p>
          <p className="text-gray-500">
            Plataforma integral de envíos, paquetería y compras por encargo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link
            href="/client"
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h2 className="text-2xl font-bold">App Cliente</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Experiencia móvil para usuarios que necesitan enviar paquetes, hacer compras por encargo y rastrear entregas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ Crear pedidos</li>
                <li>✓ Rastrear en tiempo real</li>
                <li>✓ Chat con rider</li>
                <li>✓ Historial de pedidos</li>
              </ul>
              <div className="font-semibold text-blue-600 group-hover:text-blue-700">
                Explorar →
              </div>
            </div>
          </Link>

          <Link
            href="/rider"
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 text-white">
              <div className="text-6xl mb-4">🚴</div>
              <h2 className="text-2xl font-bold">App Rider</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                App móvil para repartidores con gestión de pedidos, navegación, comunicación y control de ganancias.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ Aceptar pedidos</li>
                <li>✓ Gestionar entregas</li>
                <li>✓ Ver ganancias</li>
                <li>✓ Comunicación directa</li>
              </ul>
              <div className="font-semibold text-green-600 group-hover:text-green-700">
                Explorar →
              </div>
            </div>
          </Link>

          <Link
            href="/admin"
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white">
              <div className="text-6xl mb-4">📊</div>
              <h2 className="text-2xl font-bold">Panel Admin</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Dashboard administrativo con KPIs, gestión operativa, riders, pedidos y reportes en tiempo real.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ Dashboard con KPIs</li>
                <li>✓ Mapa operativo</li>
                <li>✓ Gestión de riders</li>
                <li>✓ Control de pedidos</li>
              </ul>
              <div className="font-semibold text-purple-600 group-hover:text-purple-700">
                Explorar →
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Características del Prototipo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">🎨 Diseño</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Moderno y profesional</li>
                <li>✓ Mobile-first responsive</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ Estética startup</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">⚙️ Funcionalidad</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Navegación fluida</li>
                <li>✓ Datos mock realistas</li>
                <li>✓ Estados simulados</li>
                <li>✓ Interactivo y usable</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">📱 3 Aplicaciones</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Cliente móvil</li>
                <li>✓ Rider móvil</li>
                <li>✓ Admin web</li>
                <li>✓ Navegación integrada</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">🎯 Módulos</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ 5+ módulos principales</li>
                <li>✓ 20+ pantallas</li>
                <li>✓ Matching de riders</li>
                <li>✓ Notificaciones simuladas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Listo para Comenzar</h2>
          <p className="text-lg opacity-90 mb-8">
            Selecciona una de las 3 experiencias principales arriba para explorar el prototipo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/client"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              Cliente
            </Link>
            <Link
              href="/rider"
              className="px-6 py-3 bg-white text-green-600 rounded-lg font-bold hover:bg-green-50 transition"
            >
              Rider
            </Link>
            <Link
              href="/admin"
              className="px-6 py-3 bg-white text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
