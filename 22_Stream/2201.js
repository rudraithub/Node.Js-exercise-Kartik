//## 2201- write a program for read stream data 
const fs = require('fs');

const readStream = fs.createReadStream('input.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
    console.log('End of stream.');
});
