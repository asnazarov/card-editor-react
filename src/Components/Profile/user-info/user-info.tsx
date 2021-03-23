import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import style from './userInfo.module.css'
import {typeButtons} from "../../../constants/constants";
import ButtonOpenPopup from "../../UI/buttons-open-popups/buttons-opens-popups";
import AddCardPopup from "../../Popups/add-card-popup/add-card-popup";
import {appGlobalStore} from "../../../redux/store";

type UserInfoType = {
  popupStore: any
}
const UserInfo: React.FC<UserInfoType> = ({popupStore}) => {
  const cards = useSelector(({cards}: appGlobalStore) => cards.items)
  const {user} = useSelector(({user}: appGlobalStore) => user)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setDisabled(cards?.length === 0 && true)
  }, [cards.length])

  return (
    <div className={style.userInfo}>
      <div className={style.userInfo__photo}/>
      <div className={style.userInfo__data}>
        <h1 className={style.userInfo__name}>{user.name}</h1>
        <p className={style.userInfo__job}>{user.about}</p>
        <ButtonOpenPopup type={typeButtons.openPopupEdit} className={style.userInfo__btnEdit} disabled/>
      </div>
      <ButtonOpenPopup type={typeButtons.openPopupCard}
                       className={style.userInfo__button}
                       disabled={disabled}
      />
      {popupStore.openAddCard && <AddCardPopup/>}
    </div>
  );
}

export default UserInfo;

