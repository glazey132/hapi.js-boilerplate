const hapi = require('hapi');

const server = new hapi.server({
  host: 'localhost',
  port: 8080
});

const init = async () => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      return `<h1>My modern API powered by Hapi</h1>`;
    }
  });

  await server.start();
  console.log(`Hapi server started at: ${server.info.uri} (^_^)`);
};

init();
