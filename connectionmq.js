const amqp = require('amqp');

const connection = amqp.createConnection({
    host:'10.5.0.3',
  //  login:'userRabbit',
  //  password:'passRabbit3235'
});



module.exports = connection

