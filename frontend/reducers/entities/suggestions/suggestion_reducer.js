import { RECEIVE_SUGGESTIONS } from "../../../actions/suggestion_actions";
import merge from "lodash/merge";

const SuggestionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SUGGESTIONS:
      return action.suggestions;
    default:
      return oldState;
  }
};

export default SuggestionsReducer;
