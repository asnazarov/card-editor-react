import React, {useEffect} from "react";
import classNames from 'classnames';
import {useDispatch} from "react-redux";

import closeSvg from '../images/close.svg';
import style from '../popup.module.scss';
import Button from "../../UI/Button";
import {typeButtons} from "../../../constants/constants";
import {setOpenPopupAddCard} from "../../../redux/actions/popupAction";

const AddCardPopup = () => {
const dispatch = useDispatch()

useEffect(() => {
  document.addEventListener('keydown', e => {
    String(e.key) === 'Escape' && dispatch(setOpenPopupAddCard(false))
  })
}, [])

  const closeAddCardPopup = () => dispatch(setOpenPopupAddCard(false))

  return (
    <div id="addUserPopup" className={style.popup}>
      <div className={style.popup__content}>
        <img onClick={closeAddCardPopup}
          src={closeSvg} alt="close"
             className={style.popup__close}/>
          <h3 className={style.popup__title}>Новое место</h3>
          <form className={style.popup__form} noValidate name="new">
            <div className="input-container ">
              <input id="title" type="text" minLength="2" maxLength="30" required name="title"
                     className={style.popup__input} placeholder="Название" />
                <span id="title-error" className="error"/>
            </div>

            <div className="input-container ">
              <input id="url" type="url" required name="link" className={style.popup__input}
                     placeholder="Ссылка на картинку"/>
                <span id="url-error" className="error"/>
            </div>
            <Button type={typeButtons.addCardSubmit} className={classNames(style.popup__button, style.popup__button_user)} />
          </form>
      </div>
    </div>
  )
}

export default AddCardPopup;