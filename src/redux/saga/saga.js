import {call, put, takeEvery, select, all} from 'redux-saga/effects'
import axios from "axios";
import {
  PATCH_USER,
  LOAD_CARDS,
  EDIT_USER,
  POST_ADD_CARD,
  ADD_CARD,
  DELETE_CARD_SAGA,
  LIKE_CARD_SAGA, FAVORITE_CARD
} from "../constants";
import {addCardAction, favoriteCardAction} from "../actions/cardsAction";

const baseUrl = 'https://nomoreparties.co/cohort11'
const config = {
  headers: {'Authorization': `f19dbf25-1050-4e87-9f03-ebd68dde2c37`}
};

const getItems = () => axios.get(`${baseUrl}/cards`, config)
const patchUser = (data) => axios.patch(`${baseUrl}/users/me`, data, config)
const getUser = () => axios.get(`${baseUrl}/users/me`, config)
const postAddCard = (data) => axios.post(`${baseUrl}/cards`, data, config)
const deleteCard = (id) => axios.delete(`${baseUrl}/cards/${id}`, config)
const putLike = (id) => axios.put(`${baseUrl}/cards/like/${id}`, {id: id}, config)
const deleteLike = (id) => axios.delete(`${baseUrl}/cards/like/${id}`, config)

function* sagaLikeCard() {
  try {
    const {cards} = yield select();
    let data;
    if (cards.removeLike) {
      const res = yield call(deleteLike, cards.likeId)
      data = {
        _id: res.data._id,
        link: res.data.link,
        name: res.data.name,
        likes: res.data.likes,
      }
    } else {
      const res = yield call(putLike, cards.likeId)
      data = {
        _id: res.data._id,
        link: res.data.link,
        name: res.data.name,
        likes: res.data.likes,
      }
    }
    yield put(favoriteCardAction({type: FAVORITE_CARD, payload: data}))
  } catch (err) {
    console.log(err)
  }
}

function* sagaDeleteCard() {
  const {cards} = yield select()
  const id = cards.deleteCardId
  yield call(deleteCard, id)
  // console.log(cards.deleteCardId)
}

function* sagaPostAddCard() {
  try {
    const {cards} = yield select()
    const response = yield call(postAddCard, cards.createCard)
    let data;
    data = {
      _id: response.data._id,
      link: response.data.link,
      name: response.data.name,
      likes: response.data.likes,
    }
    yield put(addCardAction({type: ADD_CARD, payload: data}))
  } catch (err) {
    console.log(err)
  }
}

function* sagaGetUser() {
  try {
    const response = yield call(getUser)
    yield put({type: EDIT_USER, payload: response.data})
  } catch (err) {
    console.log(err)
  }
}

function* sagaGetItems(action) {
  try {
    let response = yield call(getItems);
    yield put({type: LOAD_CARDS, payload: response.data});
  } catch (err) {
    console.log(err);
  }
}

function* sagaPatchUser() {
  try {
    const {user} = yield select();
    yield call(patchUser, user.user)
  } catch (err) {
    console.log(err)
  }
}

export default function* rootSaga() {
  yield takeEvery(PATCH_USER, sagaPatchUser)
  yield takeEvery(POST_ADD_CARD, sagaPostAddCard)
  yield takeEvery(DELETE_CARD_SAGA, sagaDeleteCard)
  yield takeEvery(LIKE_CARD_SAGA, sagaLikeCard)
  yield  all([
    sagaGetItems(),
    sagaGetUser(),


  ])
}




