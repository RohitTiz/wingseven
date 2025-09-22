import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { getInstructorByCategory } from '../utils/helpers';

const CartCourseCard = ({ course, selected, onSelect, onRemove, onUpdateQuantity }) => {
  const { darkMode } = useDarkMode();
  const instructor = course.instructor || getInstructorByCategory(course.category);
  
  // Dynamic CSS classes based on dark mode
  const containerClasses = `
    p-4 flex items-start gap-4 border-b last:border-b-0 
    transition-colors duration-300
    ${darkMode ? 'dark-bg dark-border border-gray-700' : 'light-bg light-border border-gray-200'}
  `;
  
  const textPrimaryClasses = `
    text-lg font-medium mb-1 transition-colors duration-300
    ${darkMode ? 'light-text text-gray-100' : 'dark-text text-gray-900'}
  `;
  
  const textSecondaryClasses = `
    text-sm mb-2 transition-colors duration-300
    ${darkMode ? 'light-text text-gray-300' : 'dark-text text-gray-600'}
  `;
  
  const cardClasses = `
    flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden transition-colors duration-300
    ${darkMode ? 'dark-card bg-gray-700' : 'light-card bg-gray-200'}
  `;
  
  const quantityButtonClasses = `
    w-8 h-8 flex items-center justify-center border rounded-l-md 
    transition-colors duration-300 hover:bg-opacity-50
    ${darkMode ? 
      'dark-border border-gray-600 hover:bg-gray-600' : 
      'light-border border-gray-300 hover:bg-gray-100'
    }
  `;
  
  const quantitySpanClasses = `
    w-10 h-8 flex items-center justify-center border-t border-b 
    transition-colors duration-300
    ${darkMode ? 
      'dark-border border-gray-600' : 
      'light-border border-gray-300'
    }
  `;
  
  const removeButtonClasses = `
    text-sm transition-colors duration-300 hover:text-opacity-80
    ${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-800'}
  `;
  
  const priceClasses = `
    text-lg font-bold transition-colors duration-300
    ${darkMode ? 'light-text text-gray-100' : 'dark-text text-gray-900'}
  `;

  return (
    <div className={containerClasses}>
      <input
        type="checkbox"
        checked={selected}
        onChange={onSelect}
        className="h-4 w-4 text-blue-600 rounded mt-4 transition-colors duration-300"
      />
      
      <div className={cardClasses}>
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
        <h3 className={textPrimaryClasses}>{course.title}</h3>
        <p className={textSecondaryClasses}>By {instructor}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => onUpdateQuantity(course.id, course.quantity - 1)}
              className={quantityButtonClasses}
            >
              -
            </button>
            <span className={quantitySpanClasses}>
              {course.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(course.id, course.quantity + 1)}
              className={`
                w-8 h-8 flex items-center justify-center border rounded-r-md 
                transition-colors duration-300 hover:bg-opacity-50
                ${darkMode ? 
                  'dark-border border-gray-600 hover:bg-gray-600' : 
                  'light-border border-gray-300 hover:bg-gray-100'
                }
              `}
            >
              +
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <span className={priceClasses}>₹{course.price * course.quantity}</span>
            <button
              onClick={() => onRemove(course.id)}
              className={removeButtonClasses}
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