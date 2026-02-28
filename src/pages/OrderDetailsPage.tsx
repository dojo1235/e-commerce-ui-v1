import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { orders } from '@/src/data/orders';
import { OrderDetails } from '@/src/features/orders/OrderDetails';
import { ChevronLeft } from 'lucide-react';

export const OrderDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
        <Link to="/orders" className="text-blue-600 hover:underline">Back to Orders</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/orders" className="inline-flex items-center text-sm text-zinc-500 hover:text-black transition-colors">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to orders
          </Link>
        </div>
        <OrderDetails order={order} />
      </div>
    </main>
  );
};
