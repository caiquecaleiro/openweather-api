import React from 'react';
import { Router, hashHistory } from 'react-router';

import App from './components/App';
import ForecastList from './containers/ForecastList';

const componentRoutes = {
  component: App,
  path: '/',
  indexRoute: { 
    component: ForecastList 
  }
};

function Routes() {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
}

export default Routes;
