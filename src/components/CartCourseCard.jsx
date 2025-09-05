import React from 'react';
import { getInstructorByCategory } from '../utils/helpers';

const CartCourseCard = ({ course, selected, onSelect, onRemove, onUpdateQuantity }) => {
  const instructor = course.instructor || getInstructorByCategory(course.category);
  
  return (
    <div className="p-4 flex items-start gap-4 border-b border-gray-200 last:border-b-0">
      <input
        type="checkbox"
        checked={selected}
        onChange={onSelect}
        className="h-4 w-4 text-blue-600 rounded mt-4"
      />
      
      <div className="flex-shrink-0 w-32 h-20 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={course.image || "/api/placeholder/400/250"}
          alt={course.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x250?text=Course+Image";
          }}
        />
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-900 mb-1">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-2">By {instructor}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => onUpdateQuantity(course.id, course.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100"
            >
              -
            </button>
            <span className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
              {course.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(course.id, course.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100"
            >
              +
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold">₹{course.price * course.quantity}</span>
            <button
              onClick={() => onRemove(course.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCourseCard;