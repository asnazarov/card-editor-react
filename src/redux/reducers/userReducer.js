import {EDIT_USER} from "../constants";

const initialState = {
  user: {
    about: '',
    avatar: '',
    cohort: '',
    name: '',
    _id: '',
  }
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        user: {
          about: action.payload.about,
          avatar: action.payload.avatar,
          cohort: action.payload.cohort,
          name: action.payload.name,
          _id: action.payload._id,
        }
      }
    default :
      return state
  }
}

export default user;

