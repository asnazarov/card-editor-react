import {ADD_CARD, CREATE_CARD, DELETE_CARD, FAVORITE_CARD, LIKE_CARD, LOAD_CARDS} from "../constants";

const initialState = {
  items: [],
  createCard: {
    link: '',
    name: '',
  },
  addCard: {
    _id: '',
    link: '',
    name: '',
    likes: [],
  },
  deleteCardId: 0,
  likeId: '',
  removeLike: false,

}

const cards = (state = initialState, action) => {

  console.log(action)
  switch (action.type) {
    case LOAD_CARDS :
      return {
        ...state,
        items: action.payload
      }
    case CREATE_CARD:
      return {
        ...state,
        createCard: {
          link: action.payload.link,
          name: action.payload.name,
        }
      }
    case ADD_CARD:
      let data
      data = {
        likes: [],
        _id: action.payload._id,
        link: action.payload.link,
        name: action.payload.name,
      }
      return {
        ...state,
        createCard: data,
        items: [...state.items, data]
      }
    case DELETE_CARD :
      const newValue = state.items.filter(obj => obj._id !== action.payload)
      return {
        ...state,
        deleteCardId: action.payload,
        items: [...newValue]
      }
    case LIKE_CARD :

      return {
        ...state,
        likeId: action.payload.likeId,
        removeLike: action.payload.removeLike,
      }
    case FAVORITE_CARD:
      let newItems = state.items
      const currentFindIndex = state.items.findIndex(obj => obj._id === action.payload._id)
      newItems.splice(currentFindIndex, 1, action.payload)
      return {
        ...state,
        items: [...newItems],
      }
    default :
      return state
  }
}

export default cards