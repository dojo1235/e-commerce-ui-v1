import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/src/ui';
import { Product } from '@/src/data/products';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-100 bg-white transition-all hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </Link>

      <div className="flex flex-1 flex-col p-2 sm:p-4">
        <div className="mb-0.5 text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">{product.category}</div>
        <Link to={`/product/${product.id}`} className="mb-1 sm:mb-2 line-clamp-1 text-sm sm:text-base font-semibold hover:underline">
          {product.name}
        </Link>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="text-base sm:text-lg font-bold">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-[10px] sm:text-sm text-zinc-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button size="icon" variant="secondary" className="h-7 w-7 sm:h-8 sm:w-8">
            <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Button>
        </div>
        
        <Button className="mt-2 sm:mt-4 w-full h-8 sm:h-10 text-xs sm:text-sm" variant="outline">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
