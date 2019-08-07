import { connect } from "react-redux";
import ListingDetail from "../individual-listing-detail/ListingsDetail";
import { fetchListing } from "../../../actions/listing_actions";
import { fetchAllBookings } from "../../../actions/booking_actions";
import { fetchComments } from "../../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    listing: state.entities.listings[ownProps.match.params.listingId],
    bookings: state.entities.bookings,
    comments: state.entities.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id)),
    fetchAllBookings: () => dispatch(fetchAllBookings()),
    fetchComments: () => dispatch(fetchComments())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingDetail);
