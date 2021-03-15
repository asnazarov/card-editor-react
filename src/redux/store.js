import {createStore, combineReducers, compose, applyMiddleware} from "redux";

import popup from "./reducers/popupReducer";
import cards from "./reducers/cardsReducer";
import user from "./reducers/userReducer";

import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
  popup,
  cards,
  user,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export default store