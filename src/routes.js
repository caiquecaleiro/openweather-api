import React from 'react';
import { Router, hashHistory } from 'react-router';

import App from './components/App';
import SearchBar from './containers/SearchBar';

const componentRoutes = {
  component: App,
  path: '/',
  indexRoute: { 
    component: SearchBar 
  }
};

function Routes() {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
}

export default Routes;
