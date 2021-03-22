import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

import style from './placesList.module.scss'
import root from '../../App.module.scss';
import PlacesCard from "./place-card/place-card";
import {OPEN_IMAGE_POPUP} from "../../redux/constants";
import ImagePopup from "../Popups/image-popup/image-popup";
import {setOpenPopupImage} from "../../redux/actions/popupAction";
import {appGlobalStore} from "../../redux/store";
import {CardType} from "../../constants/types";


function PlaceLists() {
  const dispatch = useDispatch()
  const cards = useSelector(({cards}: appGlobalStore) => cards.items)
  const popupStore = useSelector(({popup}: appGlobalStore) => popup)
  const [itemLink, setItemLink] = useState<string>('')
  const [items, setItems] = useState<CardType[]>([])

  useEffect(() => {
    setItems(cards)
  }, [cards || items])

  const openPopupImage = (item: CardType) => {
    setItemLink(item.link)
    dispatch(setOpenPopupImage({type: OPEN_IMAGE_POPUP, payload: true}))
  }

  return <>
    <div className={classNames(style.placesList, root.root__section)}>
      {items.map(item => <PlacesCard openPopupImage={openPopupImage} item={item}/>)}
      {popupStore.openImage && <ImagePopup itemLink={itemLink}/>}
    </div>
  </>;
}

export default PlaceLists;
