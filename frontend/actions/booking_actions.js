export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const CLEAR_BOOKINGS = "CLEAR_BOOKINGS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as APIBookingsUtil from "../util/booking_api_util";

export const receiveAllBookings = bookings => {
  return {
    type: RECEIVE_ALL_BOOKINGS,
    bookings
  };
};

const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING,
    booking
  };
};

const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const clearBookings = () => ({
  type: CLEAR_BOOKINGS
});

export const fetchAllBookings = () => dispatch =>
  APIBookingsUtil.fetchAllBookings().then(
    bookings => dispatch(receiveAllBookings(bookings)),
    errors => dispatch(receiveErrors(errors))
  );

export const fetchBooking = bookingId => dispatch =>
  APIBookingsUtil.fetchBooking(bookingId).then(
    booking => dispatch(receiveBooking(booking)),
    errors => dispatch(receiveErrors(errors))
  );

export const createBooking = booking => dispatch =>
  APIBookingsUtil.createBooking(booking).then(
    booking => dispatch(receiveBooking(booking)),
    errors => dispatch(receiveErrors(errors))
  );

export const updateBooking = booking => dispatch =>
  APIBookingsUtil.updateBooking(booking).then(
    booking => dispatch(receiveBooking(booking)),
    errors => dispatch(receiveErrors(errors))
  );

export const deleteBooking = bookingId => dispatch =>
  APIBookingsUtil.deleteBooking(bookingId).then(
    bookingId => dispatch(removeBooking(bookingId)),
    errors => dispatch(receiveErrors(errors))
  );
