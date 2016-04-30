import thinky, { r, type } from '../thinkyConfig.js';

const Idea = thinky.createModel('Idea', {
  id: type.string(),
  content: type.string(),
  upvotes: type.number(),
  createdAt: type.date().default(r.now),
});

export default Idea;

// Relationship defined after export following docs to handle circular reference,
// require used instead of import due to same issue (https://github.com/neumino/thinky/issues/399)
const Board = require('./Board').default;
Idea.belongsTo(Board, 'board', 'boardId', 'id');
