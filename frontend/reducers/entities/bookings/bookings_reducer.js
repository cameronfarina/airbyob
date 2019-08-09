import {
  RECEIVE_ALL_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING,
  CLEAR_BOOKINGS
} from "../../../actions/booking_actions";
import { merge } from "lodash";

const bookingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({}, state, [action.bookingId]);
    case REMOVE_BOOKING:
      let newState = merge({}, state);
      delete newState[action.bookingId];
      return newState;
    case CLEAR_BOOKINGS:
      return {};
    default:
      return state;
  }
};

export default bookingReducer;
