import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, LayoutDashboard, Package } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../store';

export const Header: React.FC = () => {
  const cartQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            EcoStore
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center text-gray-700 hover:text-purple-600"
            >
              <LayoutDashboard className="w-5 h-5 mr-1" />
              Dashboard
            </Link>
            <Link 
              to="/products" 
              className="flex items-center text-gray-700 hover:text-purple-600"
            >
              <Package className="w-5 h-5 mr-1" />
              Products
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-purple-600" />
              {cartQuantity > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {cartQuantity}
                </motion.span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};