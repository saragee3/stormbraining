import thinky from '../thinkyConfig.js';
// Object destructuring issue (https://github.com/neumino/thinky/issues/351)
const r = thinky.r;
const type = thinky.type;

const Board = thinky.createModel('Board', {
  id: type.string(),
  title: type.string().required(),
  createdAt: type.date().default(r.now),
});

export default Board;

// Relationship defined after export following docs to handle circular reference,
// require used instead of import due to same issue (https://github.com/neumino/thinky/issues/399)
const Idea = require('./Idea').default;
Board.hasMany(Idea, 'ideas', 'id', 'boardId');
