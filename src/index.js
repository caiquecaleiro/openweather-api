import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import Moment from 'moment';
import '../styles/style.css'; 

import Routes from './routes';
import reducers from './reducers';

Moment.locale(window.navigator.userLanguage || window.navigator.language); 

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);