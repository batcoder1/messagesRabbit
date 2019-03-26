var amqp = require('amqp');
 
const connection = require('./connectionmq');
connection.on('ready',function(){
    console.log('Conexion lista worker');
    var queue = 'queue1';

    connection.queue(queue, function (queue) {
        // get all messages
        queue.bind('#');

        queue.subscribe(function (message) {
            var buffer = new Buffer.from(message.data);
            console.log("message: ",buffer.toString());
        });
    });
});

connection.on('error',function(){
    console.log('Error conectando con el broker',arguments);
});

 
 