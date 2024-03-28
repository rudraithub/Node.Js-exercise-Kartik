//## 1601 - wite a program for all DNS methods. 

const dns = require('dns');

const domain = "example.com";


dns.lookup(domain, (err, address, family) => {
    if (err) {
        console.error("Error in DNS lookup:", err);
    } else {
        console.log("IPv4 addresses:", [address]);
    }
});


dns.reverse('93.184.216.34', (err, hostnames) => {
    if (err) {
        console.error("Error in reverse lookup:", err);
    } else {
        console.log("Reverse lookup:", hostnames);
    }
});


dns.resolve(domain, 'AAAA', (err, addresses) => {
    if (err) {
        console.error("Error in resolving IPv6 addresses:", err);
    } else {
        console.log("IPv6 addresses:", addresses);
    }
});


dns.resolveMx(domain, (err, mxRecords) => {
    if (err) {
        console.error("Error in resolving MX records:", err);
    } else {
        console.log("MX records:", mxRecords);
    }
});
