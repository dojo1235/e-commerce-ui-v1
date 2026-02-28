import React, { useState } from 'react';
import { orders } from '@/src/data/orders';
import { OrderList } from '@/src/features/orders/OrderList';
import { Pagination } from '@/src/ui';

export const OrdersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const paginatedOrders = orders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Orders</h1>
          <p className="text-zinc-500">Track and manage your recent purchases</p>
        </div>
        
        {orders.length > 0 ? (
          <>
            <OrderList orders={paginatedOrders} />
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
              className="mt-8"
            />
          </>
        ) : (
          <div className="text-center py-20 bg-zinc-50 rounded-2xl">
            <p className="text-zinc-500">You haven't placed any orders yet.</p>
          </div>
        )}
      </div>
    </main>
  );
};
