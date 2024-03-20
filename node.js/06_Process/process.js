console.log(`Process Architecture: ${process.arch}`);
console.log(`Process PID: ${process.pid}`);
console.log(`Process Platform: ${process.platform}`);
console.log(`Process Version: ${process.version}`);
console.log(`Process arguments : ${process.argv}`);  // Corrected from process.args to process.argv
console.log(`Process env: ${JSON.stringify(process.env)}`);  // Corrected from process.env to JSON.stringify(process.env)
console.log(`Process release: ${JSON.stringify(process.release)}`);  // Corrected from process.release to JSON.stringify(process.release)
console.log(`Process Versions: ${JSON.stringify(process.versions)}`);  // Corrected from process.versions to JSON.stringify(process.versions)

process.argv.forEach((value, index, array) => {  
    console.log(`${index}: ${value}`);  
  });  
console.log(`Current directory: ${process.cwd()}`);  
console.log(`Uptime: ${process.uptime()}`);  
console.log(`memoryUsage: ${JSON.stringify(process.memoryUsage())}`);  
console.log(`hrtime: ${process.hrtime()}`);  