import React from 'react';
import BoardInput from '../containers/board_input';
import BoardList from '../containers/board_list';

const Boards = () => (
  <div>
    <h1> Create a brainstorm </h1>
    <BoardInput />
    <BoardList />
  </div>
);

export default Boards;
