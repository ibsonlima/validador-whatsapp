import React from 'react';

export function Input({ label, className = '', ...props }) {
  return (
    <div className="mb-5">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <input
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-itp-2 focus:border-itp-2 block w-full p-2.5 ${className}`}
        {...props}
      />
    </div>
  );
}