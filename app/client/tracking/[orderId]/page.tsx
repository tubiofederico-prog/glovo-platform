import { TrackingOrder } from '@/components/client/TrackingOrder';

export default function TrackingPage({ params }: { params: { orderId: string } }) {
  return <TrackingOrder orderId={params.orderId} />;
}
