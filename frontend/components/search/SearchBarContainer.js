import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { fetchSuggestions } from "../../actions/suggestion_actions";
import { fetchListings } from "../../actions/listing_actions";

const mapStateToProps = state => {
  return {
    suggestions: state.entities.suggestions,
    listings: state.entities.listings
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSuggestions: () => dispatch(fetchSuggestions()),
  fetchListings: (location) => dispatch(fetchListings(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
