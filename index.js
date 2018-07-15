const hapi = require('hapi');

const server = new hapi.server({
  host: 'localhost',
  port: 8080
});

const init = async () => {
  await server.start();
  console.log(`Hapi server started at: ${server.info.uri} (^_^)`);
};

init();

server.route({
  method: 'GET',
  path: '/',
  handler: () => 'Hello World!'
});
