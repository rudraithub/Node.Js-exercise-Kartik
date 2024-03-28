//## 1501 - write all method of OS module and print data of all methods


//Node.js OS

const os = require("os");

console.log(os.arch());
console.log(os.cpus());

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1021 / 1021 / 1021}`);

const freememory = os.freemem();
console.log(`${freememory / 1021 / 1021 / 1021}`);

console.log(os.hostname());

console.log(os.platform());
console.log(os.release());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());


















