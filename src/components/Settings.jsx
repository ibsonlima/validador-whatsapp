import React, { useState } from 'react';
import { useSettings } from '../contexts/SettingsContext';
import { toast } from 'react-hot-toast';

export function Settings() {
  const { settings, updateSettings } = useSettings();
  const [apiUrl, setApiUrl] = useState(settings.apiUrl);
  const [apiKey, setApiKey] = useState(settings.apiKey);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings({ apiUrl, apiKey });
    toast.success('Configurações atualizadas com sucesso!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Configurações da API</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            URL da API
          </label>
          <input
            type="url"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-itp-2 focus:ring-itp-2 sm:text-sm"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Chave da API
          </label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-itp-2 focus:ring-itp-2 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-itp-2 hover:bg-itp-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-itp-2"
        >
          Salvar Configurações
        </button>
      </form>
    </div>
  );
}