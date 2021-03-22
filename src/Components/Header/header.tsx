import React from 'react';
import classNames from "classnames";
import style from './header.module.scss';
import root from '../../App.module.scss';
import Logo from "./Logo/Logo";

type HeaderType = {}

const Header:React.FC<HeaderType> = () => {
  return (
    <header className={classNames(style.header, root.root__section)}>
      <Logo/>
    </header>
  );
}

export default Header;
