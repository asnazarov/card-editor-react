import React, {useEffect, useState} from 'react';
import s from './placesList.module.css'
import root from '../../App.module.css';
import PlacesCard from "./PlaceCard/PlaceCard";
import api from "../api";

function PlacecList() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        const items = res.map(item => ({
          src: item.link,
          name: item.name,
          likes: item.likes.length
        }))
        setCards(items)
      })
  }, [])
  return (
    <div className={[s.placesList, root.root__section].join(' ')}>
      {cards.map(item => <PlacesCard {...item} />)}
    </div>
  );
}

export default PlacecList;
