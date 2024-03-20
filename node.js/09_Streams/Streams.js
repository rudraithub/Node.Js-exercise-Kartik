const fs = require("fs");
const http=require("http");

const server=http.createServer();
server.on('request',(req,res)=>{
let fs=require("fs");
fs.readFile("input.txt",(err,data)=>{
if (err)return console.log.error(err);
res.end(data.toString());
});
});

server.listen(80,"127.0.0.1")

const fs = require("fs");
const http = require("http");

// const server = http.createServer();

// server.on('request', (req, res) => {
//     const rstream=fs.createReadStream("input.txt")
//     rstream.on('data',(chunkdata)=>{
// res.write(chunkdata)
//     });
//     rstream.on("end",()=>{
//         res.end();
//     })
// });

// server.listen(80,"127.0.0.1");

// const fs = require("fs");
// const http = require("http");
// const server = http.createServer();
// server.on('request', (req, res) => {

// const rstream=fs.createReadStream("input.txt");
// rstream.pipe(res);
// });
// server.listen(80,"127.0.0.1");