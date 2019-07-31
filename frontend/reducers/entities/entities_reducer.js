import { combineReducers } from "redux";
import usersReducer from "./users/users_reducer";
import listingsReducer from "./listings/listings_reducer";
import suggestionReducer from "./suggestions/suggestion_reducer";

export default combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  suggestions: suggestionReducer
});
