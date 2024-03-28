//## 2501 - write a program for compress data using zlib module and also decompress data. 

const zlib = require('zlib');

const inputData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

// Compress data
const compressedData = zlib.deflateSync(inputData);
console.log('Compressed data:', compressedData);

// Decompress data
const decompressedData = zlib.inflateSync(compressedData).toString();
console.log('Decompressed data:', decompressedData);
