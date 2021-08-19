import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import BurgerButton from '../burger-button';
import './style.scss';

const Header = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header-nav">
        <Link className="nav-link" to="/">
          About me
        </Link>
        <Link className="nav-link" to="/expertise">
          Expertise
        </Link>
        <BurgerButton isOpened={isMobileMenuOpened} onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)} />
      </div>
    </div>
  );
};

export default Header;
