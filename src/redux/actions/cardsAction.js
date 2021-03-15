import {LOAD_CARDS} from "../constants";

export const cardsAction = (data) => ({
  type: LOAD_CARDS,
  payload: data
})

