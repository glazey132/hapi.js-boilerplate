'use strict';

const Hapi = require('hapi');

const server = new Hapi.server({
  host: 'localhost',
  port: 8080
});

(async () => {
  try {
    await server.start();
    console.log(`Hapi server started at: ${server.info.uri} (^_^)`);
  } catch (err) {
    console.log(err);
  }
})();

server.route({
  method: 'GET',
  path: '/',
  handler: () => 'Hello World!'
});
