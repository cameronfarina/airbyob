import { connect } from "react-redux";
import ListingsIndex from "./ListingsIndex";
import { fetchListings } from "../../../actions/listing_actions";
import { fetchListing } from "../../../actions/listing_actions";
import {updateFilter } from '../../../actions/filter_actions'

const mapStateToProps = state => {
  const listingId = state.entities.listings.listingId;
  return {
    listings: state.entities.listings,
    listingId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  fetchListing: id => dispatch(fetchListing(id)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingsIndex);
