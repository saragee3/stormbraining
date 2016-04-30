import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import Ideas from './components/ideas';
import Boards from './components/boards';
import reducers from './reducers';

const store = createStore(reducers);

render(
  <Provider store={ store }>
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <Route path="/ideas" component={ Ideas } />
        <Route path="/boards" component={ Boards } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
