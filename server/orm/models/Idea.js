import thinky, { r, type } from '../thinkyConfig.js';
import Board from './Board.js';

const Idea = thinky.createModel('Idea', {
  id: type.string(),
  content: type.string(),
  upvotes: type.number(),
  createdAt: type.date().default(r.now),
});

Idea.belongsTo(Board, 'board', 'boardId', 'id');

export default Idea;
