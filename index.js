const axios = require('axios');

async function validateWhatsAppNumbers(numbers) {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://zapv2.digicash.com.br/chat/whatsappNumbers/ibson',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'f706944751232ca8326b980a704ef949'
      },
      data: {
        numbers: numbers
      }
    });

    console.log('Validation result:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error validating WhatsApp numbers:', error.message);
    throw error;
  }
}

// Example usage
const numbersToValidate = ['558187703547'];
validateWhatsAppNumbers(numbersToValidate)
  .then(result => console.log('Validation completed'))
  .catch(error => console.log('Validation failed'));