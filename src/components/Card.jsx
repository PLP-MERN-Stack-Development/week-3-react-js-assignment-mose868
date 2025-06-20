import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  title, 
  subtitle, 
  footer,
  variant = 'default',
  onClick,
  hoverable = false 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden';
  
  const variantClasses = {
    default: 'border border-gray-200 dark:border-gray-700',
    primary: 'border border-blue-200 dark:border-blue-700',
    success: 'border border-green-200 dark:border-green-700',
    warning: 'border border-yellow-200 dark:border-yellow-700',
    danger: 'border border-red-200 dark:border-red-700',
  };

  const hoverClasses = hoverable ? 'hover:shadow-lg hover:scale-105 transform transition-all duration-200 cursor-pointer' : '';
  
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className="px-6 py-4">
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  footer: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  onClick: PropTypes.func,
  hoverable: PropTypes.bool,
};

export default Card; 