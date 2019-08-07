import { connect } from "react-redux";
import ListingsIndex from "./ListingsIndex";
import { fetchListings } from "../../../actions/listing_actions";
import { fetchListing } from "../../../actions/listing_actions";
import { updateFilter } from "../../../actions/filter_actions";
import { fetchComments } from "../../../actions/comment_actions";

const mapStateToProps = state => {
  const listingId = state.entities.listings.listingId;
  return {
    listings: state.entities.listings,
    bounds: state.entities.listings.bounds,
    comments: state.entities.comments,
    listingId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  fetchListing: id => dispatch(fetchListing(id)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchComments: () => dispatch(fetchComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingsIndex);
