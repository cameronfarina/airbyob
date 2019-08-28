import { connect } from "react-redux";
import CommentIndexItem from "./comment_index_item";
import {
  fetchComments,
  fetchComment,
  deleteComment
} from "../../actions/listing_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    comment: ownProps.comment
  };
};

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments()),
  fetchComment: id => dispatch(fetchComment(id)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndexItem);
