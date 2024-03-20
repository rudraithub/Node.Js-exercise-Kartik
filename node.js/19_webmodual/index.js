const http=require("http")
const fs=require("fs")
const url=require("url")

http.createServer(function(request, response){
const pathname=url.parse(request.url).pathname;

console.log("response"+pathname+"received");


fs.readFile(pathname.substr(1),function(error,data){
if(error){
    console.log("ERROR")
    response.writeHead(404,{'content-type':'text/html'});
}
else{
    response.writeHead(200,{'content-type':'text/html'});
    response.write(data.toString());
}
response.end();
});
}).listen(8081);   
console.log('Server running at http://127.0.0.1:8081/');