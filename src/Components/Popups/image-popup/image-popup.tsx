import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import style from '../popup.module.scss';
import closeSvg from '../images/close.svg';
import {setOpenPopupImage} from "../../../redux/actions/popupAction";
import {OPEN_IMAGE_POPUP} from "../../../redux/constants";

type ImagePopupType = {
  itemLink: string
}

const ImagePopup: React.FC<ImagePopupType> = ({itemLink}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      String(e.key) === 'Escape' && dispatch(setOpenPopupImage({type: OPEN_IMAGE_POPUP, payload: false}))
    })
  }, [])

  const closeImagePopup = () => {
    dispatch({type: OPEN_IMAGE_POPUP, payload: false})
  }

  return (
    <div id="imagePopup" className={style.popup}>
      <div className={style.popup__contentImage}>
        <img onClick={closeImagePopup} src={closeSvg} alt="close" className={style.popup__close}/>
        <img src={itemLink} className={style.popup__image}
             alt=""/>
      </div>
    </div>
  )
}

export default ImagePopup;