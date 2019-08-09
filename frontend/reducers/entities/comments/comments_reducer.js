import { merge } from "lodash";
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_LISTING
} from "../../../actions/listing_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING:
      return merge({}, state, action.comments);
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.listingId.id];
      return newState;
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: comment });
    default:
      return state;
  }
};

export default commentsReducer;
