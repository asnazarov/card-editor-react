import React from 'react';
import s from './placeCard.module.css'

function PlacesCard(props) {
  const styles = {
    // backgroundImage: "url(https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg)"
    backgroundImage: `url(${props.src})`
  }

  return (
    <div className={s.placeCard}>
      <div id="pic" className={s.placeCard__image} style={styles}>
        <button className={s.placeCard__deleteIcon}></button>
      </div>
      <div className={s.placeCard__description}>
        <h3 className={s.placeCard__name}>{props.name}</h3>
        <div>
          <button className={s.placeCard__likeIcon}></button>
          <p className={s.placeCard__likeNumber}>{props.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default PlacesCard;
