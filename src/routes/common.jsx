import * as React from 'react';

const Home = React.lazy(() => import('../pages/home'));
const Expertise = React.lazy(() => import('../pages/expertise'));

export const commonRoutes = [
  {
    path: '/',
    exact: true,
    Component: Home,
  },
  {
    path: '/expertise',
    exact: true,
    Component: Expertise,
  },
];
