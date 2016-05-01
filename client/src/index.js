import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import promise from 'redux-promise';

import App from './components/app';
import Ideas from './components/ideas';
import Boards from './components/boards';
import reducers from './reducers';

const store = applyMiddleware(promise)(createStore);

render(
  <Provider store={ store(reducers) }>
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <Route path="/boards" component={ Boards } />
        <Route path="/boards/:board_id" component={ Ideas } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
