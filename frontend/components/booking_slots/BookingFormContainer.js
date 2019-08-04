import { connect } from "react-redux";

import BookingForm from "./BookingForm";
import { clearErrors, createBooking, clearBookings } from "../../actions/booking_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger
  const listings = Object.keys(state.entities.listings).map(id => {
    return state.entities.listings[id];
  });
  return {
    listings,
    history: ownProps.history,
    bookings: Object.keys(state.entities.bookings),
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking)),
    clearErrors: () => dispatch(clearErrors()),
    clearBookings: () => dispatch(clearBookings())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);