//## - 2101 - write a program for all buffer methods.

const str = "Hello, World!";

const buf = Buffer.from(str);

console.log("Original Buffer:", buf);
console.log("Buffer Length:", buf.length);

console.log("Buffer as String:", buf.toString());


buf.write("Goodbye", 0);
console.log("Modified Buffer:", buf.toString());


const slicedBuf = buf.slice(0, 5);
console.log("Sliced Buffer:", slicedBuf.toString());


const concatBuf = Buffer.concat([slicedBuf, Buffer.from("World! Node.js")]);
console.log("Concatenated Buffer:", concatBuf.toString());

const compareBuf = Buffer.from("GoodbyeWorld!");
console.log("Compare Buffers:", buf.compare(compareBuf));


const copiedBuf = Buffer.alloc(10);
buf.copy(copiedBuf);
console.log("Copied Buffer:", copiedBuf.toString());


const filledBuf = Buffer.alloc(10);
filledBuf.fill('A');
console.log("Filled Buffer:", filledBuf.toString());


console.log("Includes \"Hello\":", buf.includes("Hello"));
console.log("Includes \"Goodbye\":", buf.includes("Goodbye"));


console.log("Buffer as JSON:", JSON.stringify(buf.toJSON()));


const jsonBuf = Buffer.from(JSON.parse('{"type":"Buffer","data":[71,111,111,100,98,121,101,87,111,114,108,100,33]}'));
console.log("Buffer from JSON:", jsonBuf.toString());
