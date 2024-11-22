import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../store/cartSlice';
import type { RootState } from '../store';

export const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  if (cart.items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
        <button
          onClick={() => dispatch(clearCart())}
          className="text-red-600 hover:text-red-700 flex items-center gap-2"
        >
          <Trash2 size={20} />
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {cart.items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Minus size={20} />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Plus size={20} />
              </button>
            </div>
            <p className="font-semibold text-gray-900 w-24 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${cart.totalAmount.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};