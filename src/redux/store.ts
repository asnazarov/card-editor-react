import {createStore, combineReducers, compose, applyMiddleware} from "redux";

import popup from "./reducers/popupReducer";
import cards from "./reducers/cardsReducer";
import user from "./reducers/userReducer";

import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  popup,
  cards,
  user,
})

type rootReducerType = typeof rootReducer
export type appGlobalStore = ReturnType<rootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
// @ts-ignore
export default store