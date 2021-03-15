import {LOAD_CARDS} from "../constants";

const initialState = {
  items: []
}

const cards = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_CARDS :
        return {
          ...state,
          items: action.payload
        }
      default :
        return state
    }
}

export default cards