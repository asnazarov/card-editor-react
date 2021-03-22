import {ADD_CARD, CREATE_CARD, DELETE_CARD, FAVORITE_CARD, LIKE_CARD, LOAD_CARDS} from "../constants";
import {CardType, CreateCardType} from "../../constants/types";

type cardsActionType = {
  type: typeof LOAD_CARDS,
  payload: CardType,
}
export const cardsAction = (data: cardsActionType): cardsActionType => ({
  type: LOAD_CARDS,
  payload: data.payload
})

type addCardActionType = {
  type: typeof ADD_CARD,
  payload: CardType
}
export const addCardAction = (obj: addCardActionType): addCardActionType => ({
  type: ADD_CARD,
  payload: obj.payload,
})

type createCardActionType = {
  type: typeof CREATE_CARD,
  payload: CreateCardType
}
export const createCardAction = (obj: createCardActionType): createCardActionType => ({
  type: CREATE_CARD,
  payload: obj.payload,
})

type deleteCardActionType = {
  type: typeof DELETE_CARD,
  payload: string
}
export const deleteCardAction = (num: deleteCardActionType): deleteCardActionType => ({
  type: DELETE_CARD,
  payload: num.payload,
})

type likeCardActionType = {
  type: typeof LIKE_CARD,
  payload: { likeId: string, removeLike: boolean }
}
export const likeCardAction = (obj: likeCardActionType): likeCardActionType => ({
  type: LIKE_CARD,
  payload: obj.payload,
})

type favoriteCardActionType = {
  type: typeof FAVORITE_CARD,
  payload: CardType
}
export const favoriteCardAction = (item: favoriteCardActionType):favoriteCardActionType => ({
  type: FAVORITE_CARD,
  payload: item.payload,
})
