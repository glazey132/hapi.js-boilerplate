const hapi = require('hapi');
const mongoose = require('mongoose');

const Painting = require('./models/Painting');

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
  server.route([
    {
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        return `<h1>My modern API powered by Hapi</h1>`;
      }
    },
    {
      method: 'GET',
      path: '/api/v1/paintings',
      handler: (request, reply) => {
        return Painting.find();
      }
    },
    {
      method: 'POST',
      path: '/api/v1/paintings',
      handler: (request, reply) => {
        const { name, url, techniques } = request.payload;
        const painting = new Painting({
          name,
          url,
          techniques
        });

        return painting.save();
      }
    }
  ]);

  await server.start();
  console.log(`Hapi server started at: ${server.info.uri} (^_^)`);
};

init();
