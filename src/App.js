import React from 'react';
import s from './App.module.css';
import Header from './Components/Header/header.jsx';
import Profile from './Components/Profile/profile.jsx';
import PlacesList from "./Components/PlaceLists/place-lists";
import axios from "axios";

function App() {


  return (
    <div className={s.root}>
      <Header />
      <Profile />
      <PlacesList />
    </div>
  );
}

export default App;
