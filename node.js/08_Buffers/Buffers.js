buf = new Buffer(256);  
len = buf.write("Simply Easy Learning");  

console.log("Octets written : "+  len); 

const buffer1 = Buffer.alloc(10); // Creates a buffer of size 10 bytes
console.log(buffer1)

const buffer2 = Buffer.from([1, 2, 3]);
const buffer3 = Buffer.from("Hello, World!", "utf-8"); // UTF-8 encoded buffer
// console.log(buffer2)
console.log(buffer3)

const utf8String = buffer3.toString('utf-8');

console.log(utf8String); 


// buf = new Buffer(256);  
// len = buf.write("Simply Easy Learning");  
// console.log("Octets written : "+  len); 