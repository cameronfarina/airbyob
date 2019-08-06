import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";
import FilterBar from "./Filterbar";

const mapStateToProps = state => {
  return {
    listings: Object.values(state.entities.listings),
    minPrice: state.ui.filters.minPrice,
    maxPrice: state.ui.filters.maxPrice,
    minBeds: state.ui.filters.minBeds,
    maxBeds: state.ui.filters.maxBeds,
    minBathrooms: state.ui.filters.minBathrooms,
    maxBathrooms: state.ui.filters.maxBathrooms
  };
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);
