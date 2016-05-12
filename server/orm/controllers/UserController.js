import User from '../models/User.js';
import Board from '../models/Board.js';
import helper from './helper.js';

export default {
  addUser: (req, res) => {
    const id = req.user.sub;
    const newUser = new User({ ...req.body.user, id });
    // Used ._get() and .execute() to return null instead of
    // throwing error when user is not found
    User._get(id).execute()
      .then((user) => {
        if (!user) {
          newUser.save()
            .then((user) => {
              res.status(201).json({ user });
            })
            .error(helper.handleError(res));
        } else {
          res.status(200).json({ user });
        }
      });
  },

  getUser: (req, res) => {
    const id = req.user.sub;

    User.get(id).getJoin({
      authoredBoards: {
        _apply: (sequence) => sequence.orderBy('createdAt'),
      },
      boards: {
        _apply: (sequence) => sequence.orderBy('createdAt'),
      },
    }).run()
      .then((user) => {
        res.status(200).json({ user });
      })
      .error(helper.handleError(res));
  },

  joinUserToBoard: (req, res) => {
    const id = req.params.board_id;
    const userId = req.user.sub;

    User.get(userId).getJoin({ boards: true }).run()
      .then((user) => {
        Board.get(id).run()
          .then((joinedBoard) => {
            const existingIndex = user.boards.map((board) => board.id).indexOf(joinedBoard.id);
            if (existingIndex < 0 && user.id !== joinedBoard.authorId) {
              user.boards = [...user.boards, joinedBoard];
              user.saveAll({ boards: true })
                .then((updatedUser) => {
                  res.status(201).json({ user: updatedUser });
                });
            } else {
              res.sendStatus(422);
            }
          });
      })
      .error(helper.handleError(res));
  },

  removeUserFromBoard: (req, res) => {
    const id = req.params.board_id;
    const userId = req.user.sub;

    User.get(userId).getJoin({ boards: true }).run()
      .then((user) => {
        Board.get(id).run()
          .then((joinedBoard) => {
            const existingIndex = user.boards.map((board) => board.id).indexOf(joinedBoard.id);
            if (existingIndex > -1 && user.id !== joinedBoard.authorId) {
              user.boards.splice(existingIndex, 1);
              user.saveAll({ boards: true })
                .then((updatedUser) => {
                  res.status(201).json({ user: updatedUser });
                });
            } else {
              res.sendStatus(404);
            }
          });
      })
      .error(helper.handleError(res));
  },
};
