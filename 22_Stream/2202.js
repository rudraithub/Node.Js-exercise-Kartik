//## 2202 - write a program for write a stream data

const fs = require('fs');


const inputData = 'hello world\n'; 


const writeStream = fs.createWriteStream('output.txt', { flags: 'a' });file


writeStream.write(inputData, 'utf8', () => {
    console.log('Write operation completed.');
});


writeStream.on('error', (err) => {
    console.error('Error writing to file:', err);
});

writeStream.end();
