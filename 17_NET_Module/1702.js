const serverPort  = 3000;

const server = 'localhost';

let net = require('net');

console.log('connecting to server...');

let client = net.connect({server:server,port:serverPort},function(){

    console.log('client connected');

    // send data

    console.log('send data to server');

    client.write('Hello from client!');

});

client.on('data', function(data) {

    console.log('received data: ' + data.toString());

    client.end();

});

client.on('error',function(err){

    console.log(err);

});

client.on('end', function() {

    console.log('client disconnected');

});