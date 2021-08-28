import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Spinner from '../components/spinner';
import { commonRoutes } from './common';

const routes = [...commonRoutes];

export const Routes = () => (
  <React.Suspense fallback={<Spinner />}>
    <Switch>
      {routes.map(({ Component, ...route }, key) => (
        <Route key={key} path={route.path} component={Component} {...route} />
      ))}
    </Switch>
  </React.Suspense>
);
