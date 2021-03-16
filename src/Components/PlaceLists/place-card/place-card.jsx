import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './placeCard.module.scss'
import {deleteCardAction} from "../../../redux/actions/cardsAction";
import {DELETE_CARD, DELETE_CARD_SAGA} from "../../../redux/constants";

function PlacesCard({item, openPopupImage}) {
  const dispatch = useDispatch()

  const deleteCard = (item) => {
    dispatch(deleteCardAction({type: DELETE_CARD, payload: item._id}))
    dispatch({type: DELETE_CARD_SAGA})
  }

  return (
    <div className={style.placeCard}>
      <div onClick={_ => openPopupImage(item)} id="pic" className={style.placeCard__image}
           style={{backgroundImage: `url(${item.link})`}}>
      </div>
      <button onClick={_ => deleteCard(item)} className={style.placeCard__deleteIcon}/>

      <div className={style.placeCard__description}>
        <h3 className={style.placeCard__name}>{item.name}</h3>
        <div>
          <button className={style.placeCard__likeIcon}/>
          <p className={style.placeCard__likeNumber}>{item.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default PlacesCard;
