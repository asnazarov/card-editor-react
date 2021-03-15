import React from 'react';
import s from './header.module.css';
import root from '../../App.module.css';
import Logo from "./Logo/Logo";

function Header() {
  return (
      <header className={[s.header, root.root__section].join(' ')} >
        <Logo />
      </header>
  );
}

export default Header;
