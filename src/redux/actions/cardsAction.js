import {ADD_CARD, CREATE_CARD, DELETE_CARD, FAVORITE_CARD, LIKE_CARD, LOAD_CARDS} from "../constants";

export const cardsAction = (data) => ({
  type: LOAD_CARDS,
  payload: data
})

export const addCardAction = (obj) => ({
  type: ADD_CARD,
  payload: obj.payload,
})

export const createCardAction = (obj) => ({
  type: CREATE_CARD,
  payload: obj.payload,
})

export const deleteCardAction = (num) => ({
  type: DELETE_CARD,
  payload: num.payload,
})

export const likeCardAction = (id) => ({
  type: LIKE_CARD,
  payload: id.payload,
})

export const favoriteCardAction = (item) => ({
  type: FAVORITE_CARD,
  payload: item.payload,
})
