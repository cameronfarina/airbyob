import { combineReducers } from "redux";
import sessionErrorsReducer from "../reducers/sessions/session_errors_reducer";

export default combineReducers({
  session: sessionErrorsReducer
});

