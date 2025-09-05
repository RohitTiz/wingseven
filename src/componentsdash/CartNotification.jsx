// componentsdash/CartNotification.jsx
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

const CartNotification = () => {
  const { isNotificationVisible } = useCart();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isNotificationVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isNotificationVisible]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p className="font-semibold">Successfully Added to Cart!</p>
          <p className="text-sm opacity-90">Course has been added to your cart</p>
        </div>
        <button 
          onClick={() => setShow(false)}
          className="ml-2 hover:bg-green-600 rounded-full p-1"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartNotification;