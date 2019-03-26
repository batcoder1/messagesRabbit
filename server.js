'use strict';

const Hapi=require('hapi');
const routes = require("./routes"); 
const connection = require('./connectionmq');
var process = require('child_process');
  
var child = process.fork('worker.js');

// Create a server with a host and port
let server=Hapi.server({
    host:'10.5.0.2',
    port:8000
});

 
const iniciarServer = async () => {
    try {
  
      await server.register(routes);
      await server.start();
      console.log(`Server runs in: ${server.info.uri}`);
    } catch (error) {
      console.log('Error starting server:' + error);
    }
  };


connection.on('ready',function(){
   console.log('Connection ready.');
});
connection.on('error', function(e) {
    console.log("Error from amqp: ", e);
});


iniciarServer();