import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useAuth } from './contexts/AuthContext';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { NumberInput } from './components/NumberInput';
import { ResultTable } from './components/ResultTable';
import { FileUpload } from './components/FileUpload';
import { Settings } from './components/Settings';
import { validateWhatsAppNumbers } from './services/whatsappValidator';

export default function App() {
  const { isAuthenticated } = useAuth();
  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('validator');

  if (!isAuthenticated) {
    return (
      <>
        <Login />
        <Toaster position="top-right" />
      </>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numbersList = numbers
      .split('\n')
      .map(n => n.trim())
      .filter(n => n);

    if (numbersList.length === 0) {
      toast.error('Por favor, insira pelo menos um número');
      return;
    }

    setLoading(true);
    try {
      const data = await validateWhatsAppNumbers(numbersList);
      setResult(data);
      toast.success('Validação concluída');
    } catch (error) {
      toast.error(error.message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleNumbersFromExcel = (numbersList) => {
    setNumbers(numbersList.join('\n'));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onTabChange={setActiveTab} activeTab={activeTab} />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {activeTab === 'validator' ? (
              <>
                <FileUpload 
                  onNumbersExtracted={handleNumbersFromExcel}
                  loading={loading}
                />
                <div className="border-t border-gray-200 pt-4">
                  <NumberInput
                    value={numbers}
                    onChange={setNumbers}
                    onSubmit={handleSubmit}
                    loading={loading}
                  />
                </div>
                {result && <ResultTable result={result} />}
              </>
            ) : (
              <Settings />
            )}
          </div>
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}