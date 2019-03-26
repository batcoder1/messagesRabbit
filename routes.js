const connection = require('./connectionmq');

module.exports = {
    name: 'ApiRoutes',
    pkg: require('./connectionmq'),
    register: async (server) => {
         
        server.route([
        {
          method: 'GET',
          path: '/',
          handler: async (req, h) => {
            return 'Hola Noders!';
          }
        },
      
        {
          method: 'POST',
          path: '/message',
          handler:  async (req, h) => {
            await connection.publish('queue1', req.payload.message);
            return { data: req.payload}
          }
        },

        {
          method: 'GET',
          path: '/{queue}/{message}',
          handler:  async (req, res) => {
            return res.response({
                queue: req.params.queue,
                message: req.params.message
              }).type('application/json');
          }
        }
      ]);
    
    }
  }
 