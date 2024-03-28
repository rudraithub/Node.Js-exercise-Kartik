const process = require('process');


const memoryUsage = process.memoryUsage();
console.log('Memory Usage:', memoryUsage);


console.log('Process Arguments:', process.argv);

console.log('Environment Variables:', process.env);

// Current Working Directory
console.log('Current Working Directory:', process.cwd());

// Process ID
console.log('Process ID:', process.pid);

// Platform
console.log('Platform:', process.platform);

// Node.js Version
console.log('Node.js Version:', process.version);

// Process Uptime (seconds)
console.log('Process Uptime (seconds):', process.uptime());

// Exiting process
console.log('Exiting process...');
process.exit();
