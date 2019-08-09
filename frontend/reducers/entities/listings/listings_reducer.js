import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING
} from "../../../actions/listing_actions";
import { merge } from "lodash";

const ListingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return action.listings.listings;
    case RECEIVE_LISTING:
      return merge({}, oldState, { [action.listing.id]: action.listing });
    case REMOVE_LISTING:
      let removeState = merge({}, oldState);
      delete removeState[action.listingId];
      return removeState;
    default:
      return oldState;
  }
};

export default ListingsReducer;
