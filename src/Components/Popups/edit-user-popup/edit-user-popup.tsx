import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import style from '../popup.module.scss'
import closeSvg from '../images/close.svg';
import {typeButtons} from "../../../constants/constants";
import Button from "../../UI/Button";
import {setOpenPopupEdit} from "../../../redux/actions/popupAction";
import {EDIT_USER, OPEN_EDIT_POPUP, PATCH_USER} from "../../../redux/constants";
import {patchEditUser} from "../../../redux/actions/userAction";
import {CreateUserType} from "../../../constants/types";


const EditUserPopup: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent)  => {
      String(e.key) === 'Escape' && dispatch(setOpenPopupEdit({type: OPEN_EDIT_POPUP, payload: false}))
    })
  }, [])

  const closeEditPopup = () => dispatch(setOpenPopupEdit({type: OPEN_EDIT_POPUP, payload: false}))
  const [valueInput, setValueInput] = useState<CreateUserType>({name: '', about: '',})

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setValueInput({...valueInput, name: e.target.value})
  const onChangeAbout = (e: ChangeEvent<HTMLInputElement>) => setValueInput({...valueInput, about: e.target.value})
  const onSubmitDataUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(patchEditUser({type: EDIT_USER, payload: valueInput}))
    dispatch(setOpenPopupEdit({type: OPEN_EDIT_POPUP, payload: false}))
    dispatch({type: PATCH_USER}) // saga
  }

  return (
    <div id='addUserPopup' className={style.popup}>
      <div className={style.popup__content}>
        <img
          className={style.popup__close}
          src={closeSvg} alt="close"
          onClick={closeEditPopup}
        />
        <h3 className={style.popup__title}>Редактировать профиль</h3>
        <form onSubmit={onSubmitDataUser} className={style.popup__form} noValidate name="new">
          <div className="input-container ">
            <input onChange={onChangeName} id="name" type="text"
              // minLength="2" maxLength="30"
                   name="name" required
                   className={style.popup__input} placeholder="Имя"
            />
            <span id="name-error" className={style.error}/>
            <div className="input-container ">
              <input onChange={onChangeAbout} id="job" type="text"
                // minLength="2" maxLength="30"
                     name="job" required
                     className={style.popup__input} placeholder="О себе"/>
              <span id="job-error" className={style.error}/>
            </div>
            <Button type={typeButtons.editSubmit}
                    className={`${style.popup__button} ${style.popup__button_user}`}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUserPopup;
