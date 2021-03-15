import React from 'react';
import {useSelector} from "react-redux";

import style from './userInfo.module.css'
import {typeButtons} from "../../../constants/constants";
import ButtonOpenPopup from "../../UI/buttons-open-popups/buttons-opens-popups";
import AddCardPopup from "../../Popups/add-card-popup/add-card-popup";

const UserInfo = ({popupStore}) => {

  return (
    <div className={style.userInfo}>
      <div className={style.userInfo__photo}/>
      <div className={style.userInfo__data}>
        <h1 className={style.userInfo__name}>Александр</h1>
        <p className={style.userInfo__job}>Frontend</p>
        <ButtonOpenPopup type={typeButtons.openPopupEdit} className={style.userInfo__btnEdit}/>
      </div>
      <ButtonOpenPopup type={typeButtons.openPopupCard} className={style.userInfo__button}/>
      {popupStore.openAddCard && <AddCardPopup/>}
    </div>
  );
}

export default UserInfo;

