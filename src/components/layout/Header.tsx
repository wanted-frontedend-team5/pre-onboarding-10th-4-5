import React from 'react';
import { headerStyle, titleStyle } from 'style/Header.style';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Toodos</h1>
    </header>
  );
};

export default Header;
