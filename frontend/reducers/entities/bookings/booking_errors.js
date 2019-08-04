import {
  RECEIVE_ALL_BOOKINGS,
  RECEIVE_BOOKING,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from "../../../actions/booking_actions";

const bookingsErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return [];
    case RECEIVE_BOOKING:
      return [];
    case RECEIVE_ERRORS:
      return action.errors[0].responseJSON;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default bookingsErrorsReducer;
