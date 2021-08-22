import React from 'react';

import './style.scss';

const SocialLink = ({ to, socialImage }) => {
  return (
    <a className="social-link" href={to} target="_blank" rel="noreferrer">
      {socialImage}
    </a>
  );
};

export default SocialLink;
