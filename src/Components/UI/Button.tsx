import React from 'react';
import classNames from 'classnames'

import {typeButtons} from "../../constants/constants";
import style from './button.module.css'

type ButtonType = {
  type: string,
  className: string,
}

const Button: React.FC<ButtonType> = ({type, className}) => {

  switch (type) {
    case typeButtons.editSubmit :
      return <button type='submit'
                     className={classNames(style.button, className)}
      >Сохранить</button>
    case typeButtons.addCardSubmit :
      return <button type='submit'
                     className={classNames(style.button, className)}
      >Сохранить</button>
  }

  return <div/>

}

export default Button;
