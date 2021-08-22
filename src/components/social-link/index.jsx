import React, { useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';

const SocialLink = ({ to, socialImage }) => {
  const renderRedirect = useMemo(() => <Redirect to={to} />, [to]);

  return (
    <span className="social-link" onClick={renderRedirect}>
      <img src={socialImage} alt="social-link" />
    </span>
  );
};

export default SocialLink;
