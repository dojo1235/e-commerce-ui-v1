import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/src/ui';
import { Product } from '@/src/data/products';

interface CartItemProps {
  product: Product;
  quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  return (
    <div className="flex items-center gap-4 py-4 border-bottom last:border-0">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-zinc-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="flex flex-1 flex-col gap-1">
        <h3 className="font-medium text-zinc-900 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-zinc-500">{product.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={quantity <= 1}>
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm font-medium">{quantity}</span>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold">${(product.price * quantity).toFixed(2)}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OrderSummary = () => {
  return (
    <div className="rounded-xl bg-zinc-50 p-6">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-zinc-600">Subtotal</span>
          <span className="font-medium">$388.98</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-zinc-600">Shipping</span>
          <span className="font-medium text-green-600">Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-zinc-600">Tax</span>
          <span className="font-medium">$31.12</span>
        </div>
        <div className="border-t border-zinc-200 pt-3 flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold text-lg">$420.10</span>
        </div>
      </div>
      <Button className="mt-6 w-full" size="lg">
        Place Order
      </Button>
    </div>
  );
};
