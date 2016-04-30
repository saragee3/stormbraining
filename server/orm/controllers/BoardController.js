import Board from '../models/Board.js';
import helper from './helper.js';

export default {
  addBoard: (req, res) => {
    const newBoard = new Board(req.body);

    newBoard.save()
      .then(function(board) {
        res.status(201).json({ board });
      })
      .error(helper.handleError(res));
  },

  getAllBoards: (req, res) => {
    Board.orderBy({ index: 'createdAt' }).run()
      .then(function(boards) {
        res.status(200).json({ boards });
      })
      .error(helper.handleError(res));
  },

  getBoard: (req, res) => {
    const id = req.params.id;

    Board.get(id).getJoin({ ideas: {_order: 'createdAt'} }).run()
      .then(function(board) {
        res.status(200).json({ board });
      })
      .error(helper.handleError(res));
  },
};
