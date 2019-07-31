import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { fetchSuggestions } from "../../actions/suggestion_actions";

const mapStateToProps = state => {
  return {
    suggestions: state.entities.suggestions
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSuggestions: () => dispatch(fetchSuggestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
