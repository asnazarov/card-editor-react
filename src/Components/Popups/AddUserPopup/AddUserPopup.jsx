import React from 'react';
import s from '../popup.module.scss'
import close from '../../../images/close.svg';
import button from "../../UI/button.module.css";

const AddUserPopup = ({setOpenEditPopup}) => {
  return (
    <div id='addUserPopup' className={s.popup}>
      <div className={s.popup__content}>
        <img
          className={s.popup__close}
          src={close} alt="close"
          onClick={() =>setOpenEditPopup(open => !open)}
        />
        <h3 className={s.popup__title}>Редактировать профиль</h3>
        <form className={s.popup__form} noValidate name="new">
          <div className="input-container ">
            <input id="name" type="text" minLength="2" maxLength="30" name="name" required
                   className={s.popup__input} placeholder="Имя"/>
              <span id="name-error" className={s.error}/>
            <div className="input-container ">
              <input id="job" type="text" minLength="2" maxLength="30" name="job" required
                     className={s.popup__input} placeholder="О себе"/>
                <span id="job-error" className={s.error}/>
            </div>
            <button id="submit" type='submit' className="button popup__button popup__button_user">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUserPopup;
