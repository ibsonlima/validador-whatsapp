import axios from 'axios';

export async function validateWhatsAppNumbers(numbers) {
  // Get settings from localStorage or use defaults
  const settings = JSON.parse(localStorage.getItem('whatsappValidatorSettings')) || {
    apiUrl: 'https://zapv2.digicash.com.br/chat/whatsappNumbers/ibson',
    apiKey: 'f706944751232ca8326b980a704ef949'
  };

  try {
    const formattedNumbers = numbers.map(number => 
      number.startsWith('+') ? number.substring(1) : number
    );

    const response = await axios({
      method: 'post',
      url: settings.apiUrl,
      headers: {
        'Content-Type': 'application/json',
        'apikey': settings.apiKey
      },
      data: { numbers: formattedNumbers }
    });

    const result = {};
    response.data.forEach(item => {
      result[item.number] = item.exists;
    });

    return result;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao validar números');
  }
}