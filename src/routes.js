import React from 'react';
import { Router, hashHistory } from 'react-router';

import App from './components/App';

const componentRoutes = {
  component: App,
  path: '/',
};

function Routes() {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
}

export default Routes;
