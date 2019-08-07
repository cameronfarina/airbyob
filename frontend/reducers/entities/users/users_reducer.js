import { RECEIVE_CURRENT_USER } from "../../../actions/session_actions";
import {
  RECEIVE_COMMENT,
  RECEIVE_LISTING
} from "../../../actions/listing_actions";
import { merge } from "lodash";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.author.id]: action.author });
    case RECEIVE_LISTING:
      return merge({}, state, action.authors);
    default:
      return state;
  }
};

export default usersReducer;
