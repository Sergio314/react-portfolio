import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const BurgerMenu = ({ close }) => (
  <div className="burgermenu">
    <Link className="nav-link" to="/" onClick={close}>
      About me
    </Link>
    <Link className="nav-link" to="/expertise" onClick={close}>
      Expertise
    </Link>
  </div>
);

export default BurgerMenu;
