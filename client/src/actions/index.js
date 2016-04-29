export const NEW_IDEA = 'NEW_IDEA';

let nextIdeaId = 0;

export function newIdea(idea) {
  return {
    type: NEW_IDEA,
    id: nextIdeaId++,
    payload: idea,
  };
}
