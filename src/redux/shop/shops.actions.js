import shopActionTypes from "./shops.types";

export const updateCollections = (collectionsMap) => ({
  type: shopActionTypes.UPDATE_COLLECTION,
  payload: collectionsMap
})