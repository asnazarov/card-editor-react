import React from 'react';
import s from './logo.module.css'
import logo from '../../../images/logo.svg'

function Logo() {
  return (
        <img className={s.logo} src={logo} alt="mesto logo" />
  );
}

export default Logo;
