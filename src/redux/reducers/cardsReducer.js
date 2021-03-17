import {ADD_CARD, DELETE_CARD, LOAD_CARDS} from "../constants";

const initialState = {
  items: [],
  createCard: {
    _id: '',
    link: '',
    name: '',
    likes: []
  },
  deleteCardId: 0
}

const cards = (state = initialState, action) => {

  console.log(action)
  switch (action.type) {
    case LOAD_CARDS :
      return {
        ...state,
        items: action.payload
      }
    case ADD_CARD:
      let data
      data = {
        _id: action.payload._id,
        link: action.payload.link,
        name: action.payload.name,
        likes: [],
      }
      return {
        ...state,
        createCard: data,
      }
    case DELETE_CARD :
      return {
        ...state,
        deleteCardId: action.payload
      }
    default :
      return state
  }
}

export default cards