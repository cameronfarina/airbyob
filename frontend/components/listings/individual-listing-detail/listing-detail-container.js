import { connect } from "react-redux";
import ListingShow from "./listing_show";
import { fetchListing } from "../../../actions/listing_actions";

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    listing: state.entities.listings[ownProps.match.params.id],
    users: state.entities.users,
    currentUserId: state.session.id
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
)(ListingShow);
