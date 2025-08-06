import React from 'react';

interface CalComButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  // any other props
}

export const CalComButton: React.FC<CalComButtonProps> = ({ variant = 'primary', children, ...props }) => {
  let baseClasses = "px-6 py-3 rounded font-semibold focus:outline-none focus:ring-4";
  if (variant === 'primary') {
    baseClasses += " bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300";
  } else {
    baseClasses += " bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400";
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};
