import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './placeCard.module.scss'

import {deleteCardAction, likeCardAction} from "../../../redux/actions/cardsAction";
import {DELETE_CARD, DELETE_CARD_SAGA, LIKE_CARD, LIKE_CARD_SAGA} from "../../../redux/constants";
import {likeActive, likeInActive} from "../../../images";
import {CardType, UserType} from "../../../constants/types";
import {appGlobalStore} from "../../../redux/store";

type PropsType = {
  item: CardType,
  openPopupImage: (item: CardType) => void
}

const PlacesCard: React.FC<PropsType> = ({item, openPopupImage}) => {
  const dispatch = useDispatch()
  const user = useSelector(({user}: appGlobalStore) => user)
  const [likeIsActive, setLikeIsActive] = useState(false)

  useEffect(() => {
    const activeLike = item.likes.filter((like: UserType) => like._id === user.user._id).length === 1
    setLikeIsActive(activeLike)
  }, [item])

  const deleteCard = (item: CardType) => {
    dispatch(deleteCardAction({type: DELETE_CARD, payload: item._id}))
    dispatch({type: DELETE_CARD_SAGA})
  }

  const likeCard = (id: string) => {
    dispatch(likeCardAction({type: LIKE_CARD, payload: {likeId: id, removeLike: likeIsActive ? true : likeIsActive}}))
    dispatch({type: LIKE_CARD_SAGA})
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
          <img onClick={_ => likeCard(item._id)}
               src={likeIsActive ? likeActive : likeInActive}
               alt="like"
               className={style.placeCard__likeIcon}/>
          <p className={style.placeCard__likeNumber}>{item.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default PlacesCard;
