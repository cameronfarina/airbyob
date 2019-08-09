import { connect } from "react-redux";
import ListingDetail from "./ListingsDetail";
import { fetchListing } from "../../../actions/listing_actions";
import { fetchAllBookings } from "../../../actions/booking_actions";
import { selectCommentsForListing } from "../../../reducers/selectors";

const mapStateToProps = (state, { match }) => {
  const listingId = parseInt(match.params.listingId);
  const listing = state.entities.listings[listingId];
  const comments = selectCommentsForListing(state.entities, listing);
  return {
    listingId,
    listing,
    comments,
    bookings: state.entities.bookings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id)),
    fetchAllBookings: () => dispatch(fetchAllBookings())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingDetail);
