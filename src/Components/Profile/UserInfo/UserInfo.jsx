import React from 'react';
import s from './userInfo.module.css'
import button from '../../UI/button.module.css'
import Button from "../../UI/Button";

const UserInfo = ({setOpenEditPopup}) => {
  return (
    <div className={s.userInfo}>
      <div className={s.userInfo__photo}/>
      <div className={s.userInfo__data}>
        <h1 className={s.userInfo__name}>Александр</h1>
        <p className={s.userInfo__job}>Frontend</p>
        <button
          className={s.userInfo__btnEdit}
        onClick={() =>setOpenEditPopup(open => !open)}
        >Edit</button>
      </div>
      <button className={[button.button, s.userInfo__button].join(' ')}>+</button>
    </div>
  );
}

export default UserInfo;

