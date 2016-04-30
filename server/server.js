const http = require('http');
const express = require('express');
const app = express();

app.use(require('morgan')('short'));

// Initiating Webpack Dev Middleware for hot reloading in development
(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('../client/webpack/common.config');
  const compiler = webpack(webpackConfig);

  // If running from npm start, enable hot reloading
  if (process.env.BABEL_ENV === 'start') {
    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath,
    }));

    app.use(require('webpack-hot-middleware')(compiler, {
      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
    }));
  }

  app.use(express.static(__dirname + '/../client'));
})();

require('../server/config/routes.js')(app, express);

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});
