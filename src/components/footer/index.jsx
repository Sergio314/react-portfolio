import React, { useMemo } from 'react';

import SocialLink from '../social-link';
import LinkedInIcon from '../../assets/linkedInIcon.png';
import InstagramIcon from '../../assets/instagramIcon.png';
import './style.scss';

const socLinks = [
  {
    to: 'https://www.linkedin.com/in/sdprogr/',
    socialImage: LinkedInIcon,
  },
  {
    to: 'https://www.instagram.com/sdff_new/',
    socialImage: InstagramIcon,
  },
];
const Footer = () => {
  const renderSocLinks = useMemo(() => socLinks.map((link) => <SocialLink {...link} />), [socLinks]);

  return (
    <div className="footer-container">
      <div className="copyright"></div>
      <div className="social-links">{renderSocLinks}</div>
    </div>
  );
};

export default Footer;
