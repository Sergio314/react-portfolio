import * as React from 'react';

const HomePage = React.lazy(() => import('../pages/home/home'));

export const commonRoutes = [
  {
    path: '/',
    exact: true,
    Component: HomePage,
  },
];