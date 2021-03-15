import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from './placesList.module.scss'
import root from '../../App.module.css';
import PlacesCard from "./place-card/place-card";
import api from "../api";
import {OPEN_IMAGE_POPUP} from "../../redux/constants";
import ImagePopup from "../Popups/image-popup/image-popup";
import {setOpenPopupImage} from "../../redux/actions/popupAction";


function PlaceLists() {
  const dispatch = useDispatch()
  const cards = useSelector(({cards}) => cards.items)
  const popupStore = useSelector(({popup}) => popup)
  const [itemLink, setItemLink] = useState('')

  const openPopupImage = (item) => {
    setItemLink(item.link)
    dispatch(setOpenPopupImage({type: OPEN_IMAGE_POPUP, payload: true}))
  }

  return (
    <div className={[s.placesList, root.root__section].join(' ')}>
      {cards.map(item => <PlacesCard openPopupImage={openPopupImage} item={item}/>)}
      {popupStore.openImage && <ImagePopup itemLink={itemLink}/>}
    </div>
  );
}

export default PlaceLists;
