import React, { useMemo } from 'react';

import SocialLink from '../social-link';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedInIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagramIcon.svg';
import './style.scss';

const socLinks = [
  {
    to: 'https://www.linkedin.com/in/sdprogr/',
    socialImage: <LinkedInIcon />,
  },
  {
    to: 'https://www.instagram.com/sdff_new/',
    socialImage: <InstagramIcon />,
  },
];
const Footer = () => {
  const renderSocLinks = useMemo(() => socLinks.map((link) => <SocialLink {...link} />), []);

  return (
    <div className="footer-container">
      <div className="footer-item">© 2021 Sergio Demidoff</div>
      <div className="footer-item">{renderSocLinks}</div>
    </div>
  );
};

export default Footer;
