import { connect } from "react-redux";

import { createComment } from "../../actions/comment_actions";
import CreateComment from "./create_comment";

const _nullReview = {
  rating: null,
  body: ""
};

const mapStateToProps = state => ({
  comment: _nullReview
});

const mapDispatchToProps = dispatch => ({
  submit: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateComment);
