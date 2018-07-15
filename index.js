const hapi = require('hapi');
const mongoose = require('mongoose');

console.log('process.env.mdb:  ', process.env.MONGODB_URI);
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
);

mongoose.connection.once('open', () => {
  console.log(`Connected to MongoDB`);
});

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
