import {call, put, takeEvery, select, all} from 'redux-saga/effects'
import axios from "axios";
import {PATCH_USER, LOAD_CARDS} from "../constants";

const baseUrl = 'https://nomoreparties.co/cohort11'
const config = {
  headers: {'Authorization': `f19dbf25-1050-4e87-9f03-ebd68dde2c37`}
};

const getItems = () => axios.get(`${baseUrl}/cards`, config)
const patchUser = (data) => axios.patch(`${baseUrl}/users/me`, data, config)

function* sagaGetItems(action) {
  try {
    let response = yield call(getItems);
    yield put({type: LOAD_CARDS, payload: [...response.data]});
  } catch (err) {
    console.log(err);
  }
}

function* sagaPatchUser(action) {
  try {
    const {user} = yield select();
    const response = yield call(patchUser(user.user))
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}

export default function* rootSaga() {
  yield takeEvery(PATCH_USER, sagaPatchUser)
  yield  all([
    sagaGetItems(),
  ])
}




