import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING
} from "../actions/listing_actions";
import merge from "lodash/merge";

const initialState = {};

const ListingsReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      return merge({}, oldState, { [action.listing.id]: action.listing });
    case REMOVE_LISTING:
      let newState = merge({}, oldState);
      delete newState[action.listingId];
      return newState;
    default:
      return oldState;
  }
};

export default ListingsReducer;
