import { useParams, Link } from 'react-router-dom';
import { products } from '@/src/data/products';
import { ProductDetailsUI } from '@/src/features/products/ProductDetailsUI';
import { ChevronLeft } from 'lucide-react';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    );
  }

  const similarProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-black transition-colors">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to products
        </Link>
      </div>
      <ProductDetailsUI product={product} similarProducts={similarProducts} />
    </main>
  );
};
