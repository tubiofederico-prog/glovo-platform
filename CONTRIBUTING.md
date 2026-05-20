# Guía de Contribución - Glovo Platform

¡Gracias por tu interés en contribuir a Glovo Platform! Esta guía te ayudará a entender cómo trabajar en el proyecto.

## Estructura del Código

### Componentes

Los componentes están organizados por sección:
- `components/client/` - Componentes de la app de cliente
- `components/rider/` - Componentes de la app de rider
- `components/admin/` - Componentes del panel administrativo
- `components/shared/` - Componentes reutilizables

### Páginas

Las páginas siguen la estructura de Next.js App Router:
- `app/client/` - Rutas de cliente
- `app/rider/` - Rutas de rider
- `app/admin/` - Rutas de admin

### Datos

Los datos mock se encuentran en `data/mock.ts`. Para agregar nuevos datos:

```typescript
// data/mock.ts
export const MOCK_NEW_DATA = [
  // tus datos aquí
];
```

### Tipos

Todos los tipos TypeScript están en `types/index.ts`:

```typescript
// types/index.ts
export interface NuevoTipo {
  id: string;
  nombre: string;
  // propiedades
}
```

## Agregar una Nueva Pantalla

### 1. Crear la página
```bash
touch app/[seccion]/[ruta]/page.tsx
```

### 2. Crear el componente
```bash
touch components/[seccion]/NuevoComponente.tsx
```

### 3. Implementar con TypeScript
```typescript
'use client';

import Link from 'next/link';

export default function NuevaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* tu contenido */}
    </div>
  );
}
```

### 4. Agregar a la navegación si es necesario
Actualizar `components/shared/Navigation.tsx`

## Estándares de Código

### TypeScript
- Siempre usa tipos explícitos
- Evita `any`
- Define interfaces para datos

```typescript
interface Usuario {
  id: string;
  nombre: string;
  email: string;
}
```

### Componentes React
- Componentes funcionales
- Use `'use client'` para componentes interactivos
- Props con tipos bien definidos

```typescript
interface MiComponenteProps {
  titulo: string;
  cantidad?: number;
}

export function MiComponente({ titulo, cantidad = 0 }: MiComponenteProps) {
  // implementación
}
```

### Tailwind CSS
- Sigue la estructura existente
- Use clases predefinidas
- Mantén consistencia con colores

Colores tema:
- Cliente: Azul (`from-blue-500 to-blue-600`)
- Rider: Verde (`from-green-500 to-green-600`)
- Admin: Púrpura (`from-purple-500 to-purple-600`)

### Nombres y Convenciones
- Componentes: PascalCase (`MiComponente.tsx`)
- Variables: camelCase (`miVariable`)
- Archivos: kebab-case (`mi-archivo.ts`)
- Interfaces: PascalCase con sufijo (MiInterfaceProps)

## Git Workflow

### Commits
Usa mensajes descriptivos:

```bash
git commit -m "tipo: Descripción breve

- Cambio 1
- Cambio 2"
```

Tipos de commit:
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato
- `refactor`: Refactorización de código
- `test`: Agregar o actualizar tests

### Ejemplo
```bash
git commit -m "feat: Add new order tracking page

- Implement real-time tracking visualization
- Add live chat with rider
- Show ETA and rider location"
```

## Testing

Aunque actualmente es un prototipo, para expandir:

```bash
# Instalar testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest

# Crear test
touch __tests__/components/MiComponente.test.tsx

# Ejecutar tests
npm run test
```

## Reportar Issues

Si encuentras un bug:

1. Describe el problema claramente
2. Incluye pasos para reproducir
3. Especifica tu entorno (navegador, SO)
4. Proporciona screenshots si es relevante

## Proponer Mejoras

Para proponer nuevas características:

1. Abre una issue describiendo la característica
2. Explica el caso de uso
3. Proporciona mockups o wireframes si es posible

## Preguntas Frecuentes

### ¿Cómo cambio los datos mock?
Edita `data/mock.ts` y actualiza los componentes que usen esos datos.

### ¿Cómo agrego colores nuevos a Tailwind?
Edita `tailwind.config.ts` en la raíz del proyecto (si existe).

### ¿Puedo agregar nuevas dependencias?
Para dependencias, contacta al administrador del proyecto primero.

### ¿Cómo depliego cambios?
Sube a main y usa Vercel, Netlify u otro hosting compatible con Next.js.

## Estilo de Código

### Formateo
Se recomienda usar Prettier (si está configurado):
```bash
npm run format
```

### Linting
```bash
npm run lint
```

## Performance

### Optimizaciones Implementadas
- Next.js Image optimization
- Dynamic imports para code splitting
- Server Components donde sea posible
- Tailwind CSS purging

### Cosas a Evitar
- Importar librerías grandes sin necesidad
- Renders innecesarios
- Queries sin paginación
- Datos duplicados

## Seguridad

### Datos Sensibles
- Nunca commitees `.env.local`
- Usa `.env.example` para plantillas
- Variables públicas con `NEXT_PUBLIC_`

## Documentación

- Mantén el README actualizado
- Documenta cambios en la estructura
- Agrega comentarios para código complejo
- Usa JSDoc para funciones públicas

```typescript
/**
 * Crea un nuevo pedido en el sistema
 * @param cliente - Información del cliente
 * @param detalles - Detalles del pedido
 * @returns Promise con el ID del pedido creado
 */
export async function crearPedido(
  cliente: ClientUser,
  detalles: Order
): Promise<string> {
  // implementación
}
```

## Necesitas Ayuda?

- Revisa issues existentes
- Consulta la documentación de Next.js
- Pregunta en el repositorio

---

¡Gracias por contribuir a Glovo Platform! 🚀
