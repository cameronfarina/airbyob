import { connect } from "react-redux";
import { createComment } from "../../actions/listing_actions";
import CreateCommentForm from "./create_comment";

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateCommentForm);
