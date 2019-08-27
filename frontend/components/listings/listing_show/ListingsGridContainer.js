import { connect } from "react-redux";
import ListingsGrid from "./ListingsGrid";
import { fetchListings } from "../../../actions/listing_actions";

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
  fetchListings: () => dispatch(fetchListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingsGrid);
