import { connect } from "react-redux";

import BookingFormIndex from "./BookingFormIndex";
import {
  createBooking,
  fetchAllBookings,
  fetchBooking,
  deleteBooking,
  clearErrors,
  updateBooking
} from "../../actions/booking_actions";
import { fetchListing } from "../../actions/listing_actions";
import { userBookings } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    bookings: Object.values(state.entities.bookings),
    comments: Object.values(state.entities.comments),
    listings: Object.values(state.entities.listings),
    currentUser: state.entities.users[state.session.id],
    userBookings: () => userBookings(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking)),
    updateBooking: booking => dispatch(updateBooking(booking)),
    deleteBooking: id => dispatch(deleteBooking(id)),
    clearErrors: () => dispatch(clearErrors()),
    fetchListing: id => dispatch(fetchListing(id)),
    fetchAllBookings: () => dispatch(fetchAllBookings()),
    fetchBooking: id => dispatch(fetchBooking(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingFormIndex);
