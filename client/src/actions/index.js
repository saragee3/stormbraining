import axios from 'axios';

export const NEW_IDEA = 'NEW_IDEA';
export const NEW_BOARD = 'NEW_BOARD';
export const GET_BOARDS = 'GET_BOARDS';
export const GET_ONE_BOARD = 'GET_ONE_BOARD';

const ROOT_URL = '/api';

export function newIdea(idea) {
  return {
    type: NEW_IDEA,
    payload: idea,
  };
}

export function newBoard(title) {
  const boardRequest = axios.post(ROOT_URL + '/boards', { title });
  return {
    type: NEW_BOARD,
    payload: boardRequest,
  };
}

export function getBoards() {
  const request = axios.get(ROOT_URL + '/boards');
  return {
    type: GET_BOARDS,
    payload: request,
  };
}

export function getOneBoard(id) {
  const request = axios.get(ROOT_URL + '/boards/' + id);
  return {
    type: GET_ONE_BOARD,
    payload: request,
  };
}
