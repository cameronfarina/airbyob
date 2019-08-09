import { connect } from "react-redux";

import CommentIndex from "./comment_index";
import { deleteComment, fetchListing } from "../../actions/listing_actions";

const mapStateToProps = state => {
  return {
    comments: state.entities.comments,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(deleteComment(id)),
  fetchListing: id => dispatch(fetchListing(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
