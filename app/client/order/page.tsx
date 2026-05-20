import { CreateOrder } from '@/components/client/CreateOrder';
import { Suspense } from 'react';

export default function OrderPage({ searchParams }: { searchParams: { service?: string } }) {
  return (
    <Suspense fallback={<div className="pt-40 text-center">Cargando...</div>}>
      <CreateOrder serviceType={searchParams.service} />
    </Suspense>
  );
}
