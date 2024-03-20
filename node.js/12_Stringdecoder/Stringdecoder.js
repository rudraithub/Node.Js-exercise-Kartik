const stringdecoder=require("string_decoder").StringDecoder

const decoder=new stringdecoder('utf8');

const buf1=new Buffer.from("this is a test");
console.log(decoder.write(buf1));
const buf2=new Buffer.from('7468697320697320612074c3a97374', 'hex');
console.log(decoder.write(buf2));
const buf3=Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72]);
console.log(decoder.write(buf3));


const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent)); // Prints: ¢

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro)); // Prints: € 


decoder.write(Buffer.from([0xE2]));
decoder.write(Buffer.from([0x82]));
console.log(decoder.end(Buffer.from([0xAC])));