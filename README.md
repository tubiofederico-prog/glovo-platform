# 🚀 Glovo Platform - Prototipo Visual

**Plataforma integral semifuncional tipo Glovo** para envíos, paquetería y compras por encargo.

Un prototipo visual profesional y completamente funcional con 3 aplicaciones integradas, diseñado para presentar a inversores o clientes.

![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)

---

## 📱 3 Aplicaciones Integradas

### 👨‍💼 **App de Cliente** (Mobile)
Experiencia de usuario para solicitar envíos, compras por encargo y rastrear entregas en tiempo real.

**Pantallas:**
- Home con 6 categorías de servicios
- Flujo de creación de pedidos (4 pasos)
- Rastreo en tiempo real con mapa visual
- Chat simulado con el rider
- Historial de pedidos
- Perfil y notificaciones

### 🚴 **App de Rider** (Mobile)
Aplicación para repartidores con gestión completa de entregas, navegación y control de ganancias.

**Pantallas:**
- Home con lista de pedidos disponibles
- Aceptar/rechazar pedidos
- Detalles del pedido con mapa de ruta
- Actualización de estados de entrega
- Chat con cliente
- Historial de entregas
- Panel de ganancias y estadísticas

### 📊 **Panel Administrativo** (Web)
Dashboard operativo para gestionar la plataforma en tiempo real.

**Pantallas:**
- Dashboard con KPIs principales
- Mapa operativo simulado con riders activos
- Tabla de pedidos en tiempo real
- Gestión de riders (lista, perfiles, métricas)
- Configuración (tarifas, categorías de servicio)
- Reportes y estadísticas

---

## ✨ Características Destacadas

✅ **Diseño Moderno y Profesional**
- Estética tipo startup
- Mobile-first responsive
- Colores modernos y accesibles
- Componentes reutilizables

✅ **Funcionalidad Semifuncional**
- Navegación fluida entre las 3 apps
- Estados simulados realistas
- Datos mock profesionales
- Chat y notificaciones simuladas

✅ **20+ Pantallas Completamente Diseñadas**
- Todas las pantallas clave del flujo
- Transiciones suaves
- Interfaz intuitiva

✅ **Stack Moderno**
- Next.js 16 con App Router
- TypeScript para type safety
- Tailwind CSS para estilos
- Componentes React reutilizables

✅ **Listo para Presentar**
- Documentación completa
- Datos realistas mockeados
- Prototipo profesional
- Ideal para pitches a inversores

---

## 🛠️ Stack Tecnológico

| Herramienta | Versión | Propósito |
|---|---|---|
| **Next.js** | 16.2.6 | Framework React con SSR |
| **React** | 19 | Librería UI |
| **TypeScript** | 5 | Type safety |
| **Tailwind CSS** | 3 | Styling y diseño responsive |
| **Node.js** | 18+ | Runtime |

---

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js 18.17.0 o superior
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/tubiofederico-prog/glovo-platform.git
cd glovo-platform

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

El servidor estará disponible en: **http://localhost:3000**

### Comandos Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Producción
npm run build            # Build para producción
npm start                # Inicia servidor de producción

# Calidad
npm run lint             # Ejecuta linter
```

---

## 📁 Estructura del Proyecto

```
glovo-platform/
├── app/
│   ├── client/              # Rutas y páginas de cliente
│   ├── rider/               # Rutas y páginas de rider
│   ├── admin/               # Rutas y páginas de admin
│   ├── layout.tsx           # Layout global
│   └── page.tsx             # Landing page
├── components/
│   ├── client/              # Componentes de cliente
│   ├── rider/               # Componentes de rider
│   ├── admin/               # Componentes de admin
│   └── shared/              # Componentes compartidos
├── types/
│   └── index.ts             # Definiciones de tipos
├── data/
│   └── mock.ts              # Datos mockeados
└── ...
```

---

## 📊 Datos Mock Incluidos

### Usuarios
- **1 Cliente:** Juan García (rating: 4.8, 42 entregas)
- **4 Riders:** Con diferentes vehículos y calificaciones

### Órdenes
- 2 órdenes completadas
- 2 órdenes activas en tiempo real
- 47 pedidos activos en el admin
- 142 pedidos completados hoy

### Servicios Disponibles
1. 📦 Enviar Paquete
2. 🛒 Comprar por Encargo
3. 🔄 Retirar y Entregar
4. 💊 Farmacia
5. 🏪 Kiosco
6. 🏬 Supermercado

---

## 🎯 Casos de Uso

Este prototipo es ideal para:

- 🎤 **Pitches a inversores** - Demostración visual de la idea
- 💼 **Presentaciones a clientes** - Validación de concepto
- 👥 **Reuniones con stakeholders** - Comunicación clara de requirements
- 🎓 **Portfolio profesional** - Demostración de skills
- 📱 **Base para desarrollo** - Punto de partida para equipo de dev

---

## 👨‍💻 Desarrollo

### Agregar Nueva Pantalla

1. Crear archivo en `app/[seccion]/[ruta]/page.tsx`
2. Crear componente en `components/[seccion]/`
3. Actualizar navegación si es necesario

### Cambiar Datos Mock

Editar `data/mock.ts` para ajustar usuarios, órdenes y datos de prueba.

---

## 📞 Contacto

- **Autor:** Federico Tubio
- **Email:** tubiofederico@gmail.com
- **GitHub:** [@tubiofederico-prog](https://github.com/tubiofederico-prog)

---

**Made with ❤️ by Federico Tubio**
