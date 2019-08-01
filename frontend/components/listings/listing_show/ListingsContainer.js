import { connect } from "react-redux";
import ListingsIndex from "./ListingsIndex";
import { fetchListings } from "../../../actions/listing_actions";

const mapStateToProps = state => {
  return {
    listings: state.entities.listings
  };
};

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingsIndex);
