import { useState } from 'react';
import { products } from '@/src/data/products';
import { SearchBar } from '@/src/features/common/SearchBar';
import { ProductGrid } from '@/src/features/products/ProductGrid';
import { Pagination } from '@/src/features/common/Pagination';

const ITEMS_PER_PAGE = 8;

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white pb-12">
      <SearchBar />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">Featured Products</h1>
          <span className="text-sm text-zinc-500">
            Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of {products.length} products
          </span>
        </div>
      </div>
      <ProductGrid products={currentProducts} />
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </main>
  );
};
