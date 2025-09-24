import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogoutIcon } from './icons/LogoutIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { SettingsIcon } from './icons/SettingsIcon';

export function Header({ onTabChange, activeTab }) {
  const { logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <WhatsAppIcon className="w-8 h-8 text-itp-2" />
            <h1 className="text-xl font-semibold text-gray-900">Validador WhatsApp</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onTabChange('validator')}
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'validator'
                  ? 'text-white bg-itp-primary'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Validador
            </button>
            <button
              onClick={() => onTabChange('settings')}
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'settings'
                  ? 'text-white bg-itp-primary'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <SettingsIcon className="w-5 h-5 mr-2" />
              Configurações
            </button>
            <button
              onClick={logout}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-itp-primary hover:bg-itp-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-itp-2"
            >
              <LogoutIcon className="w-4 h-4 mr-2" />
              Sair
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}