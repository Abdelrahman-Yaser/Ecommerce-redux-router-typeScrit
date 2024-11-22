import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
    >
      <div className="relative h-48 mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
        {product.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {product.description}
      </p>
      <div className="flex items-center mb-4">
        <div className="flex items-center text-yellow-400">
          <Star size={16} fill="currentColor" />
          <span className="ml-1 text-sm text-gray-600">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        <span className="ml-auto text-lg font-bold text-gray-900">
          ${product.price}
        </span>
      </div>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-auto w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
      >
        <ShoppingCart size={20} />
        Add to Cart
      </button>
    </motion.div>
  );
};