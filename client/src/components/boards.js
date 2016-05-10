import React from 'react';
import BoardInput from '../containers/board_input';
import BoardList from '../containers/board_list';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Boards = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <BoardInput />
      <BoardList />
    </div>
  </MuiThemeProvider>
);

export default Boards;
