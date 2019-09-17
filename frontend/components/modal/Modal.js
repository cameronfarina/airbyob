import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";

import SignupFormContainer from "../sessions/signup_form_container";
import LoginFormContainer from "../sessions/login_form_container";
import LogoutFormContainer from "../sessions/logout_form_container";
import CreateCommenContainer from "../comments/create_comment_container";
import EditReviewContainer from "../comments/edit_comment_container";

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "login":
      component = <LoginFormContainer />;
      break;
    case "logout":
      component = <LogoutFormContainer />;
      return (
        <div onClick={closeModal}>
          <div onClick={e => e.stopPropagation()}>
            {component}
            <div onClick={closeModal} className="logout-modal-screen" />
          </div>
        </div>
      );
    case "create comment":
      component = <CreateCommenContainer />;
      break;
    case "edit comment":
      component = <EditReviewContainer customProps={modal.currentComment} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
