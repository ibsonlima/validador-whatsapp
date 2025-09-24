import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { SendIcon } from './icons/SendIcon';

export function NumberInput({ value, onChange, onSubmit, loading }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center space-x-2 mb-4">
        <WhatsAppIcon className="w-6 h-6 text-itp-2" />
        <h2 className="text-lg font-medium text-gray-900">Validação de Números</h2>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="mb-5">
          <label htmlFor="numbers" className="block mb-2 text-sm font-medium text-gray-700">
            Números WhatsApp
          </label>
          <textarea
            id="numbers"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Digite os números WhatsApp (um por linha)"
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-itp-2 focus:ring-itp-2 sm:text-sm h-32 resize-none"
            required
          />
          <p className="mt-2 text-sm text-gray-500">Digite cada número em uma nova linha</p>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-itp-2 hover:bg-itp-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-itp-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Validando...
            </>
          ) : (
            <>
              <SendIcon className="w-5 h-5 mr-2" />
              Validar Números
            </>
          )}
        </button>
      </form>
    </div>
  );
}