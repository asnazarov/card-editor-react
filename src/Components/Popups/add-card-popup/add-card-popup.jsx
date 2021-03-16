import React, {useEffect, useState} from "react";
import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";

import closeSvg from '../images/close.svg';
import style from '../popup.module.scss';
import Button from "../../UI/Button";
import {typeButtons} from "../../../constants/constants";
import {setOpenPopupAddCard} from "../../../redux/actions/popupAction";
import {addCardAction} from "../../../redux/actions/cardsAction";
import {ADD_CARD, OPEN_ADD_CARD_POPUP, POST_ADD_CARD} from "../../../redux/constants";

const AddCardPopup = () => {
  const dispatch = useDispatch()

  // const cards = useSelector(({cards}) => cards.items)
  const [addCardValue, setAddCardValue] = useState({name: '', link: ''})

  const onChangeName = (e) => setAddCardValue({...addCardValue, name: e.target.value})
  const onChangeLink = (e) => setAddCardValue({...addCardValue, link: e.target.value})
  const onSubmitAddCard = (e) => {
    e.preventDefault();
    dispatch(addCardAction({type: ADD_CARD, payload: addCardValue}))


    dispatch(setOpenPopupAddCard({type: OPEN_ADD_CARD_POPUP, payload: false}))
    dispatch({type: POST_ADD_CARD})
  }

  useEffect(() => {
    document.addEventListener('keydown', e => {
      String(e.key) === 'Escape' && dispatch(setOpenPopupAddCard({type: OPEN_ADD_CARD_POPUP, payload: false}))
    })
  }, [])

  const closeAddCardPopup = () => dispatch(setOpenPopupAddCard({type: OPEN_ADD_CARD_POPUP, payload: false}))

  return (
    <div id="addUserPopup" className={style.popup}>
      <div className={style.popup__content}>
        <img onClick={closeAddCardPopup}
             src={closeSvg} alt="close"
             className={style.popup__close}/>
        <h3 className={style.popup__title}>Новое место</h3>
        <form onSubmit={onSubmitAddCard} className={style.popup__form} noValidate name="new">
          <div className="input-container ">
            <input onChange={onChangeName} id="title" type="text" minLength="2" maxLength="30" required name="title"
                   className={style.popup__input} placeholder="Название" required/>
            <span id="title-error" className="error"/>
          </div>

          <div className="input-container ">
            <input onChange={onChangeLink} id="url" type="url" required name="link" className={style.popup__input}
                   placeholder="Ссылка на картинку" required/>
            <span id="url-error" className="error"/>
          </div>
          <Button type={typeButtons.addCardSubmit}
                  className={classNames(style.popup__button, style.popup__button_user)}/>
        </form>
      </div>
    </div>
  )
}

export default AddCardPopup;