import React, {useState} from 'react';
import s from './profile.module.scss'
import root from '../../App.module.css';
import UserInfo from "./UserInfo/UserInfo";
import AddUserPopup from "../Popups/AddUserPopup/AddUserPopup";

const Profile = () => {
  const [openEditPopup, setOpenEditPopup] = useState(false)

  return (
    <div className={[s.profile, root.root__section].join(' ')}>
      <UserInfo
        setOpenEditPopup={setOpenEditPopup}
      />
      {
        openEditPopup && <AddUserPopup setOpenEditPopup={setOpenEditPopup}/>

      }
    </div>
  );
}

export default Profile;
