import React from 'react';

import './style.scss';

const BurgerButton = ({ isOpened, ...props }) => (
  <div className={isOpened ? 'burger-menu open' : 'burger-menu'} {...props}>
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
);

export default BurgerButton;
