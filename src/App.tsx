import React from 'react';
import style from './App.module.scss';
import Profile from './Components/Profile/profile.js';
import PlacesList from "./Components/PlaceLists/place-lists";
import Header from "./Components/Header/header";


const App:React.FC = () => {

  return (
    <div className={style.root}>
      <Header/>
      <Profile/>
      <PlacesList/>
    </div>
  );
}

export default App;
