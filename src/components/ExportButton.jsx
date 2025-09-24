import React from 'react';
import { utils, writeFile } from 'xlsx';

export function ExportButton({ data }) {
  const handleExport = () => {
    const worksheet = utils.json_to_sheet(
      Object.entries(data).map(([number, exists]) => ({
        'Número': number,
        'Status': exists ? 'Válido' : 'Inválido',
        'Mensagem': exists ? 'Existe WhatsApp' : 'Não existe WhatsApp'
      }))
    );
    
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Validação WhatsApp');
    
    writeFile(workbook, 'validacao-whatsapp.xlsx');
  };

  return (
    <button
      onClick={handleExport}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      Exportar Excel
    </button>
  );
}