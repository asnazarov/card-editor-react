import React, {useState} from 'react';
import {useSelector} from "react-redux";
import classNames from 'classnames';
import {appGlobalStore} from "../../redux/store";

import style from './profile.module.scss';
import root from '../../App.module.scss';

import UserInfo from "./user-info/user-info";
import EditUserPopup from "../Popups/edit-user-popup/edit-user-popup";

const Profile = () => {
  const popupStore = useSelector(({popup}:appGlobalStore) => popup)

  return (
    <div className={classNames(style.profile, root.root__section)}>
      <UserInfo popupStore={popupStore}/>
      {popupStore.openEdit && <EditUserPopup/>}
    </div>
  );
}

export default Profile;
