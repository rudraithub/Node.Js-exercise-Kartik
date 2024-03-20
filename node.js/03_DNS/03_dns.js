//0301 list of commonly used DNS functions

//dns.lookup(hostname[, options], callback)
const dns = require('dns');
dns.lookup('rudraithub.github.io', (err, addresses, family) => {
  console.log('addresses:', addresses);
  console.log('family:',family);
});

//0302list of commonly used DNS functions
//dns.resolveMx(hostname, callback)

const hostname="www.google.com";
// const dns = require('dns');

dns.resolveMx(hostname,function(err,response)  {
    if (err) {
      console.error("something went wrong",err)
      return;
    }
console.log(response);
});
