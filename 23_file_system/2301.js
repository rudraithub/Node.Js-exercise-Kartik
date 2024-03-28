// ## 2301 - write a program for crude operation using fs module.

const fs = require('fs');

const filename = 'data.txt';
const data = 'Hello, World!\nNew data appended.\n';

// Create a file and add text to it
fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log('File created successfully.');
});

// Read the file
fs.readFile(filename, 'utf8', (err, content) => {
    if (err) throw err;
    console.log('File content:', content);
});

// Update the file
fs.appendFile(filename, 'New data appended.\n', (err) => {
    if (err) throw err;
    console.log('File updated successfully.');
});

// Delete the file
fs.unlink(filename, (err) => {
    if (err) throw err;
    console.log('File deleted successfully.');
});