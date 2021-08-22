import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import BurgerButton from '../burger-button';
import BurgerMenu from '../burger-menu';
import './style.scss';

const Header = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header-nav">
        {!isMobileMenuOpened && (
          <Link className="nav-link" to="/">
            About me
          </Link>
        )}
        {!isMobileMenuOpened && (
          <Link className="nav-link" to="/expertise">
            Expertise
          </Link>
        )}
      </div>
      {<BurgerButton isOpened={isMobileMenuOpened} onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)} />}
      {isMobileMenuOpened && <BurgerMenu />}
    </div>
  );
};

export default Header;
