import { connect } from "react-redux";
import CreateComment from "./create_comment";
import { fetchComment, updateComment } from "../../actions/listing_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  const currentBooking = state.ui.modal.currentBooking;

  return {
    formType: "Update Review",
    comment: currentBooking.comment,
    errors: state.errors.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComment: id => dispatch(fetchComment(id)),
    action: comment => dispatch(updateComment(comment)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateComment);
