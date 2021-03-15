import React, {useState} from 'react';
import {useSelector} from "react-redux";
import classNames from 'classnames';
import style from './profile.module.scss';
import root from '../../App.module.css';
import UserInfo from "./user-info/user-info";
import EditUserPopup from "../Popups/edit-user-popup/edit-user-popup";

const Profile = () => {
  const popupStore = useSelector(({popup}) => popup)

  return (
    <div className={classNames(style.profile, root.root__section)}>
      <UserInfo popupStore={popupStore}/>
      {popupStore.openEdit && <EditUserPopup/>}
    </div>
  );
}

export default Profile;
