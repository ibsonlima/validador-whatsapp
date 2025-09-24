import React from 'react';

export function Button({ children, type = 'button', className = '', ...props }) {
  return (
    <button
      type={type}
      className={`text-white bg-itp-primary hover:bg-itp-7 focus:ring-4 focus:ring-itp-2/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}