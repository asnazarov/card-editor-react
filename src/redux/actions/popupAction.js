import {EDIT_USER, OPEN_ADD_CARD_POPUP, OPEN_EDIT_POPUP, OPEN_IMAGE_POPUP} from "../constants";


export const setOpenPopupEdit = (act) => ({
  type: OPEN_EDIT_POPUP,
  payload: act.payload
})

export const setOpenPopupAddCard = (act) => ({
  type: OPEN_ADD_CARD_POPUP,
  payload: act.payload
})

export const setOpenPopupImage = (act) => ({
  type: OPEN_IMAGE_POPUP,
  payload: act.payload,
})

export const patchEditUser = (data) => ({
  type: EDIT_USER,
  payload: data.payload
})