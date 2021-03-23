import React from 'react';
import style from './logo.module.css'
import logo from '../../../images/logo.svg'

const Logo: React.FC = () => {
  return <img className={style.logo} src={logo} alt="logo"/>;
}

export default Logo;
