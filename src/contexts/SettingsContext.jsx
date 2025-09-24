import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    apiUrl: 'https://zapv2.digicash.com.br/chat/whatsappNumbers/ibson',
    apiKey: 'f706944751232ca8326b980a704ef949'
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem('whatsappValidatorSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem('whatsappValidatorSettings', JSON.stringify(newSettings));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);