import React from 'react';
import { Link } from 'react-router-dom';
import { Order } from '@/src/data/orders';
import { ChevronRight, Package } from 'lucide-react';

interface OrderListProps {
  orders: Order[];
}

export const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Delivered': return 'text-green-600 bg-green-50';
      case 'Shipped': return 'text-blue-600 bg-blue-50';
      case 'Processing': return 'text-yellow-600 bg-yellow-50';
      case 'Cancelled': return 'text-red-600 bg-red-50';
      default: return 'text-zinc-600 bg-zinc-50';
    }
  };

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Link
          key={order.id}
          to={`/orders/${order.id}`}
          className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 bg-white hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-zinc-50 flex items-center justify-center">
              <Package className="h-6 w-6 text-zinc-400" />
            </div>
            <div>
              <div className="font-bold text-zinc-900">{order.id}</div>
              <div className="text-sm text-zinc-500">{order.date}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <div className="font-semibold">${order.total.toFixed(2)}</div>
              <div className="text-xs text-zinc-400">{order.items.length} items</div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
              {order.status}
            </span>
            <ChevronRight className="h-5 w-5 text-zinc-300" />
          </div>
        </Link>
      ))}
    </div>
  );
};
