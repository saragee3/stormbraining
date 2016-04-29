import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes';

const store = createStore(reducers);

render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>
  , document.querySelector('.container'));
