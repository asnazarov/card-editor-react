import React from 'react';
import s from './profile.module.css'
import root from '../../App.module.css';
import UserInfo from "./UserInfo/UserInfo";
import AddUserPopup from "../Popups/AddUserPopup/AddUserPopup";

function Profile() {
  return (
    <div className={[s.profile, root.root__section].join(' ')}>
      <UserInfo />
      <AddUserPopup />
    </div>
  );
}

export default Profile;
