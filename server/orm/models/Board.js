import thinky, { r, type } from '../thinkyConfig.js';

const Board = thinky.createModel('Board', {
  id: type.string(),
  title: type.string().default(() => {
    return 'Board';
  }),
  createdAt: type.date().default(r.now),
});

export default Board;

// Relationship defined after export following docs to handle circular reference,
// require used instead of import due to same issue (https://github.com/neumino/thinky/issues/399)
const Idea = require('./Idea').default;
Board.hasMany(Idea, 'ideas', 'id', 'boardId');
