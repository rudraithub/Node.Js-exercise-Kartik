const { exec } = require('child_process');


exec('cd', (error, stdout, stderr) => {              //'dir','cd'
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`Result:\n${stdout}`);
});