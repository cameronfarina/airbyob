import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";

class LogoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.logout().then(this.props.closeModal);
  }

  render() {
    return (
      <div className="logout-parent">
        <div className="logout-modal">
          <p onClick={this.handleSubmit}>Log Out</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  null,
  mapDispatchToProps
)(LogoutForm);
