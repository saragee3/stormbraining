import path from 'path';
import BoardController from '../orm/controllers/BoardController.js';
import IdeaController from '../orm/controllers/IdeaController.js';

export default function routes(app, express) {

  app.route('/api/boards')
    .get(BoardController.getAllBoards)
    .post(BoardController.addBoard);

  app.route('/api/boards/:board_id')
    .get(BoardController.getBoard)
    .put(BoardController.updateBoard)
    .delete(BoardController.deleteBoard);

  app.route('/api/boards/:board_id/ideas')
    .post(IdeaController.addIdea);

  app.route('/api/boards/:board_id/ideas/:idea_id')
    .get(IdeaController.getIdea)
    .put()
    .delete();

  app.route('/api/boards/:board_id/ideas/:idea_id/upvotes')
    .post(IdeaController.upvoteIdea);

  app.route(/.*/)
    .get(function root(req, res) {
      res.sendFile(path.join(__dirname, '/../../client/index.html'));
    });
}
