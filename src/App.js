import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/routes';
import './styles/style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
