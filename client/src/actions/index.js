export const NEW_IDEA = 'NEW_IDEA';
export const NEW_BOARD = 'NEW_BOARD';

let nextIdeaId = 0;

export function newIdea(idea) {
  return {
    type: NEW_IDEA,
    id: nextIdeaId++,
    payload: idea,
  };
}

export function newBoard(boardname) {
  return {
    type: NEW_BOARD,
    payload: boardname,
  };
}
