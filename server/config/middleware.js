import morgan from 'morgan';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackConfig from '../../client/webpack/common.config';

export default function middleware(app, express) {
  app.use(morgan('short'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Initiating Webpack Dev Middleware for hot reloading in development
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

  app.use(express.static(__dirname + '/../../client'));
}
