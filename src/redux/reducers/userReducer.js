import {EDIT_USER} from "../constants";

const initialState = {
  user: {
    name: '',
    about: '',
  }
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        user: {
          name: action.payload.name,
          about: action.payload.about,
        }
      }
    default :
      return state
  }
}

export default user;