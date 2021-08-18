import * as React from 'react';

const Home = React.lazy(() => import('../pages/home'));

export const commonRoutes = [
  {
    path: '/',
    exact: true,
    Component: Home,
  },
];