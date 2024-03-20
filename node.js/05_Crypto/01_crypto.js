const { createHmac } = require('node:crypto');

const secret = 'kartik';
const hash = createHmac('sha256', secret)
               .update('kartik dabhi')
               .digest('hex');
console.log(hash);

