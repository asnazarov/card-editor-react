import React from 'react';
import s from './App.module.css';
import Header from './Components/Header/Header.jsx';
import Profile from './Components/Profile/Profile.jsx';
import PlacesList from "./Components/PlaceLists/PlaceLists";

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
