import {ADD_CARD, DELETE_CARD, LOAD_CARDS} from "../constants";

export const cardsAction = (data) => ({
  type: LOAD_CARDS,
  payload: data
})

export const addCardAction = (obj) => ({
  type: ADD_CARD,
  payload: obj.payload,
})

export const deleteCardAction = (num) => ({
  type: DELETE_CARD,
  payload: num.payload,
})