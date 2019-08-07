import { connect } from "react-redux";

import CommentIndex from "./comment_index";
import { deleteComment } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    comments: ownProps.comments,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
