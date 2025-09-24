import React, { useRef } from 'react';
import { read, utils } from 'xlsx';
import { SendIcon } from './icons/SendIcon';

export function FileUpload({ onNumbersExtracted, loading }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const data = await file.arrayBuffer();
      const workbook = read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
      
      // Extract numbers from the first column, removing headers and empty cells
      const numbers = jsonData
        .slice(1) // Skip header row
        .map(row => row[0]?.toString().trim())
        .filter(number => number);

      onNumbersExtracted(numbers);
      fileInputRef.current.value = ''; // Reset file input
    } catch (error) {
      console.error('Error reading Excel file:', error);
      toast.error('Erro ao ler arquivo Excel');
    }
  };

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-gray-700">
          Importar números do Excel
        </label>
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={loading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-itp-2 hover:bg-itp-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-itp-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SendIcon className="w-5 h-5 mr-2" />
          Selecionar Arquivo
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileUpload}
        className="hidden"
      />
      <p className="mt-2 text-sm text-gray-500">
        Aceita arquivos .xlsx ou .xls. A primeira coluna deve conter os números.
      </p>
    </div>
  );
}