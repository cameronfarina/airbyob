import { connect } from "react-redux";
import ListingsDetail from "../individual-listing-detail/ListingsDetail";
import { fetchListing } from "../../../actions/listing_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    listing: state.entities.listings[ownProps.match.params.listingId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingsDetail);
