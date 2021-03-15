import React from 'react';
import style from './placeCard.module.css'

function PlacesCard({item, openPopupImage}) {

  return (
    <div className={style.placeCard}>
      <div onClick={_ => openPopupImage(item)} id="pic" className={style.placeCard__image}
           style={{backgroundImage: `url(${item.link})`}}>
        <button className={style.placeCard__deleteIcon}/>
      </div>
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
