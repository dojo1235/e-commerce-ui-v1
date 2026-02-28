import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@/src/data/products';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <div className="grid grid-cols-2 gap-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
