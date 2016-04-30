import http from 'http';
import express from 'express';
import routes from '../server/config/routes.js';
import middleware from '../server/config/middleware.js';

const app = express();

middleware(app, express);
routes(app, express);

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});
