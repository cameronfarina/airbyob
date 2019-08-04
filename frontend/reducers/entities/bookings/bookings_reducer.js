import {
  RECEIVE_ALL_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING,
  CLEAR_BOOKINGS
} from "../../../actions/booking_actions";
import { RECEIVE_LISTING } from "../../../actions/listing_actions";
import merge from "lodash/merge";

const bookingReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return merge({}, oldState, action.bookings);
    case RECEIVE_BOOKING:
      return merge({}, oldState, { [action.booking.id]: action.booking });
    case REMOVE_BOOKING:
      let newState = merge({}, oldState);
      delete newState[action.bookingId];
      return newState;
    case RECEIVE_LISTING:
      const booking = action.payload.bookings || {};
      return booking;
    case CLEAR_BOOKINGS:
      return {};
    default:
      return oldState;
  }
};

export default bookingReducer;
