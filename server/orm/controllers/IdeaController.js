import Idea from '../models/Idea.js';
import helper from './helper.js';

export default {
  addIdea: (req, res) => {
    const boardId = req.params.board_id;
    const { content } = req.body;
    const newIdea = new Idea({ content, boardId });

    newIdea.save()
      .then(function(idea) {
        res.status(201).json({ idea });
      })
      .error(helper.handleError(res));
  },

  getIdea: (req, res) => {
    const id = req.params.idea_id;

    Idea.get(id).run()
      .then(function(idea) {
        res.status(200).json({ idea });
      })
      .error(helper.handleError(res));
  },
};
