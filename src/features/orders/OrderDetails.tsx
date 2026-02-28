import React from 'react';
import { Order } from '@/src/data/orders';
import { Package, Truck, CreditCard, MapPin } from 'lucide-react';

interface OrderDetailsProps {
  order: Order;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="space-y-8">
      {/* Order Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
        <div>
          <h1 className="text-2xl font-bold">Order {order.id}</h1>
          <p className="text-zinc-500">Placed on {order.date}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-500">Status:</span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 text-zinc-900">
            {order.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Package className="h-5 w-5" /> Items
          </h2>
          <div className="rounded-xl border border-zinc-100 divide-y divide-zinc-100">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4">
                <div className="h-20 w-20 shrink-0 rounded-lg overflow-hidden border border-zinc-100">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-zinc-900">{item.product.name}</h3>
                  <p className="text-sm text-zinc-500">{item.product.category}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-sm text-zinc-500">Qty: {item.quantity}</span>
                    <span className="font-semibold">${(item.priceAtPurchase * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Info Cards */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-zinc-50 space-y-4">
            <h2 className="font-bold flex items-center gap-2">
              <Truck className="h-5 w-5" /> Shipping
            </h2>
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-zinc-400 shrink-0" />
              <p className="text-sm text-zinc-600">{order.shippingAddress}</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-zinc-50 space-y-4">
            <h2 className="font-bold flex items-center gap-2">
              <CreditCard className="h-5 w-5" /> Payment
            </h2>
            <div className="flex gap-3">
              <CreditCard className="h-5 w-5 text-zinc-400 shrink-0" />
              <p className="text-sm text-zinc-600">{order.paymentMethod}</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-black text-white space-y-4">
            <h2 className="font-bold">Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between opacity-70">
                <span>Subtotal</span>
                <span>${(order.total * 0.9).toFixed(2)}</span>
              </div>
              <div className="flex justify-between opacity-70">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between opacity-70">
                <span>Tax</span>
                <span>${(order.total * 0.1).toFixed(2)}</span>
              </div>
              <div className="pt-2 border-t border-white/20 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
