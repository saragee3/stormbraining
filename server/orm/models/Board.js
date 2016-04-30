import thinky, { r, type } from '../thinkyConfig.js';
import Idea from './Idea.js';

const Board = thinky.createModel('Board', {
  id: type.string(),
  title: type.string().default(() => {
    return 'Board';
  }),
  createdAt: type.date().default(r.now),
});

Board.hasMany(Idea, 'ideas', 'id', 'boardId');

export default Board;
