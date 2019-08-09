import { connect } from "react-redux";
import { createComment } from "../../actions/listing_actions";
import CreateComment from "./create_comment";

const mapDispatchToProps = dispatch => ({
  createComment: (id, comment) => dispatch(createComment(id, comment))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateComment);
