import React from 'react';
import classNames from 'classnames'
import {useDispatch} from "react-redux";

import {typeButtons} from "../../../constants/constants";
import style from '../button.module.css'
import {setOpenPopupAddCard, setOpenPopupEdit} from "../../../redux/actions/popupAction";
import {OPEN_ADD_CARD_POPUP, OPEN_EDIT_POPUP} from "../../../redux/constants";

const ButtonOpenPopup = ({type, className, disabled}) => {
  const dispatch = useDispatch()

  const openPopupAddCard = () => dispatch(setOpenPopupAddCard({type: OPEN_ADD_CARD_POPUP, payload: true}))
  const openPopupEdit = () => dispatch(setOpenPopupEdit({type: OPEN_EDIT_POPUP, payload: true}))

  switch (type) {
    case typeButtons.openPopupCard :
      return <button
        onClick={openPopupAddCard}
        className={classNames(style.button, className)}
        disabled={disabled}
      >+</button>
    case typeButtons.openPopupEdit :
      return <button
        onClick={openPopupEdit}
        className={className}
      >Edit</button>
  }
}

export default ButtonOpenPopup;