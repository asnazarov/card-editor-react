import React from 'react';
import classNames from 'classnames'
import {useDispatch} from "react-redux";

import {typeButtons} from "../../constants/constants";
import style from './button.module.css'
import {setOpenPopupEdit} from "../../redux/actions/popupAction";

const Button = ({type, className}) => {
  const dispatch = useDispatch()

  switch (type) {
    case typeButtons.editSubmit :
      return <button type='submit'
        className={classNames(style.button, className)}
      >Сохранить</button>
    case typeButtons.addCardSubmit :
      return <button
        className={classNames(style.button, className)}
      >Сохранить</button>
  }

  return <div/>

}

export default Button;
