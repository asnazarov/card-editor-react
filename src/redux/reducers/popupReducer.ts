import {OPEN_ADD_CARD_POPUP, OPEN_EDIT_POPUP, OPEN_IMAGE_POPUP} from "../constants";

const initialState = {
  openEdit: false,
  openAddCard: false,
  openImage: false,
}
type initialStateType = typeof initialState

const popup = (state = initialState, action: any):initialStateType => {
  switch (action.type) {
    case OPEN_EDIT_POPUP :
      return {
        ...state,
        openEdit: action.payload
      }
    case OPEN_ADD_CARD_POPUP :
      return {
        ...state,
        openAddCard: action.payload
      }
    case OPEN_IMAGE_POPUP :
      return {
        ...state,
        openImage: action.payload
      }
    default :
      return state
  }

}

export default popup;