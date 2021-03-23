import {OPEN_ADD_CARD_POPUP, OPEN_EDIT_POPUP, OPEN_IMAGE_POPUP} from "../constants";

type setOpenPopupEditType = {
  type: typeof OPEN_EDIT_POPUP,
  payload: boolean,
}
export const setOpenPopupEdit = (act: setOpenPopupEditType): setOpenPopupEditType => ({
  type: OPEN_EDIT_POPUP,
  payload: act.payload
})

type setOpenPopupAddCardType = {
  type: typeof OPEN_ADD_CARD_POPUP,
  payload: boolean,
}
export const setOpenPopupAddCard = (act: setOpenPopupAddCardType): setOpenPopupAddCardType => ({
  type: OPEN_ADD_CARD_POPUP,
  payload: act.payload
})

type setOpenPopupImageType = {
  type: typeof OPEN_IMAGE_POPUP,
  payload: boolean,
}
export const setOpenPopupImage = (act: setOpenPopupImageType): setOpenPopupImageType => ({
  type: OPEN_IMAGE_POPUP,
  payload: act.payload,
})

