const request = require('request-promise');
const paymentUri = process.env.PAYMENT_URI || 'http://localhost:3001';

module.exports = {
  create: async (data) => {
    try {
      const result = await request({
        method: 'POST',
        url: `${paymentUri}/payments`,
        headers: {
          'Content-Type': 'application/json'
        },
        form: data
      });

      return JSON.parse(result);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
};
