import path from 'path';
import BoardController from '../orm/controllers/BoardController.js';

export default function routes(app, express) {

  app.route('/api/boards')
    .get(BoardController.getAllBoards)
    .post(BoardController.addBoard);

  app.route('/api/boards/:id')
    .get(BoardController.getBoard)
    .put(function(req, res) {

    })
    .delete(function(req, res) {

    })

  app.route('/api/boards/:id/ideas')
    .post(function(req, res) {

    })

  app.route('/api/boards/:id/ideas/:id')
    .get(function(req, res) {

    })
    .put(function(req, res) {

    })
    .delete(function(req, res) {

    })

  app.route(/.*/)
    .get(function root(req, res) {
      res.sendFile(path.join(__dirname, '/../../client/index.html'));
    });
};
