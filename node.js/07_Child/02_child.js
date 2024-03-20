const exec = require('child_process').exec;  
console.log(process.cwd())
exec('my.bat', (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
}); 