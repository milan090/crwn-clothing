// import SHOP_DATA from './shop.data';
import shopActionTypes from "./shops.types";

const INITIAL_STATE = {
  collections: {}
}

const shopReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;