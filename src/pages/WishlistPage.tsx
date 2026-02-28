import React, { useState } from 'react';
import { products } from '@/src/data/products';
import { ProductGrid } from '@/src/features/products/ProductGrid';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { Pagination } from '@/src/ui';

export const WishlistPage = () => {
  // Mock wishlist items (first 6 products to show pagination)
  const wishlistProducts = products.slice(0, 6);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(wishlistProducts.length / itemsPerPage);
  const paginatedProducts = wishlistProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Heart className="h-8 w-8 text-red-500 fill-red-500" />
              My Wishlist
            </h1>
            <p className="text-zinc-500 mt-2">Items you've saved for later</p>
          </div>
          <Link to="/" className="hidden sm:inline-flex items-center text-sm font-medium text-zinc-600 hover:text-black transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </div>

        {wishlistProducts.length > 0 ? (
          <>
            <ProductGrid products={paginatedProducts} />
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
              className="mt-12"
            />
          </>
        ) : (
          <div className="text-center py-20 bg-zinc-50 rounded-2xl">
            <Heart className="h-12 w-12 text-zinc-300 mx-auto mb-4" />
            <p className="text-zinc-500 mb-6">Your wishlist is empty</p>
            <Link to="/">
              <button className="bg-black text-white px-8 py-3 rounded-xl font-medium">
                Explore Products
              </button>
            </Link>
          </div>
        )}
        
        <div className="mt-8 sm:hidden">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-black transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
};
