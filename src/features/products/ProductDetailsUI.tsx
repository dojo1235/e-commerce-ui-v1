import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, ChevronRight } from 'lucide-react';
import { Button, Pagination } from '@/src/ui';
import { Product } from '@/src/data/products';
import { ProductCard } from './ProductCard';

interface ProductDetailsUIProps {
  product: Product;
  similarProducts: Product[];
}

export const ProductDetailsUI = ({ product, similarProducts }: ProductDetailsUIProps) => {
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'specs'>('description');
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const reviewsPerPage = 3;

  const totalReviewPages = Math.ceil(product.reviews.length / reviewsPerPage);
  const paginatedReviews = product.reviews.slice(
    (currentReviewPage - 1) * reviewsPerPage,
    currentReviewPage * reviewsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl border border-zinc-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-zinc-200 cursor-pointer hover:border-black transition-colors">
                <img
                  src={product.image}
                  alt={`${product.name} thumbnail ${i}`}
                  className="h-full w-full object-cover opacity-60 hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2 text-sm text-zinc-500 uppercase tracking-wider">{product.category}</div>
          <h1 className="mb-4 text-3xl font-bold text-zinc-900">{product.name}</h1>
          
          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`h-4 w-4 ${i <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-300'}`} />
              ))}
              <span className="ml-2 text-sm text-zinc-500">(24 reviews)</span>
            </div>
          </div>

          <div className="mb-8 flex items-baseline gap-4">
            <span className="text-4xl font-bold">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-xl text-zinc-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="mb-8 text-zinc-600 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-auto flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="sm:w-16">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="flex border-b border-zinc-200">
          {(['description', 'specs', 'reviews'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-medium capitalize transition-colors relative ${
                activeTab === tab ? 'text-black' : 'text-zinc-500 hover:text-zinc-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-black" />
              )}
            </button>
          ))}
        </div>
        <div className="py-8">
          {activeTab === 'description' && (
            <div className="prose prose-zinc max-w-none">
              <p>{product.description}</p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>High-quality materials for durability</li>
                <li>Ergonomic design for maximum comfort</li>
                <li>Sleek and modern aesthetic</li>
                <li>Easy to use and maintain</li>
              </ul>
            </div>
          )}
          {activeTab === 'specs' && (
            <dl className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="border-b border-zinc-100 pb-2">
                  <dt className="text-sm text-zinc-500">{key}</dt>
                  <dd className="text-sm font-medium text-zinc-900">{value}</dd>
                </div>
              ))}
            </dl>
          )}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {product.reviews.length > 0 ? (
                <>
                  <div className="space-y-6">
                    {paginatedReviews.map((review) => (
                      <div key={review.id} className="border-b border-zinc-100 pb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold">{review.user}</span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className={`h-3 w-3 ${i <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-300'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-zinc-600 text-sm">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                  <Pagination 
                    currentPage={currentReviewPage} 
                    totalPages={totalReviewPages} 
                    onPageChange={setCurrentReviewPage} 
                  />
                </>
              ) : (
                <p className="text-zinc-500 italic">No reviews yet. Be the first to review!</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Similar Products</h2>
          <Button variant="ghost">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {similarProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};
