import React from 'react';
import { products } from '@/src/data/products';
import { CartItem, OrderSummary } from '@/src/features/cart/CartUI';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const CartPage = () => {
  // Mock cart items
  const cartItems = [
    { product: products[0], quantity: 1 },
    { product: products[1], quantity: 1 },
    { product: products[2], quantity: 1 },
  ];

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {cartItems.length > 0 ? (
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-zinc-50 rounded-2xl">
                <p className="text-zinc-500 mb-6">Your cart is empty</p>
                <Link to="/">
                  <button className="bg-black text-white px-8 py-3 rounded-xl font-medium">
                    Start Shopping
                  </button>
                </Link>
              </div>
            )}
            
            <div className="mt-8">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
};
