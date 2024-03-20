//Node.js OS

const os = require("os");

console.log(os.arch());

console.log(os.hostname());

console.log(os.platform());

console.log(os.tmpdir());

console.log(os.cpus());

console.log(os.endianness());

console.log(os.networkInterfaces());

console.log(os.release());

console.log(os.type());

console.log(os.uptime());

console.log(os.userInfo());


const freememory = os.freemem();
console.log(`${freememory / 1021 / 1021 / 1021}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1021 / 1021 / 1021}`);





