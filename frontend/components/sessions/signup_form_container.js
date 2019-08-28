import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup, login, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeModal = this.changeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  changeModal() {
    this.props.clearErrors();
    this.props.closeModal();
    this.props.otherForm();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="errors-div">{this.renderErrors()}</div>

            <h2 className="login-modal-header">Create an account</h2>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email address"
                onChange={this.handleChange("email")}
                value={this.state.email}
              />
            </div>

            <div className="input-container">
              <input
                type="text"
                placeholder="First name"
                onChange={this.handleChange("first_name")}
                value={this.state.first_name}
              />
            </div>

            <div className="input-container">
              <input
                type="text"
                placeholder="Last name"
                onChange={this.handleChange("last_name")}
                value={this.state.last_name}
              />
            </div>

            <div className="input-container">
              <input
                type="password"
                placeholder="Create a Password"
                onChange={this.handleChange("password")}
                value={this.state.password}
              />
            </div>

            <div className="session-buttons">
              <button className="form-submit-button">Sign up</button>
            </div>

            <div className="login-modal-bottom-container">
              <span className="modal-nav-link-text">
                Already have an account?
              </span>
              <span className="signup-span" onClick={() => this.changeModal()}>
                Log in
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup"
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  processForm: user => dispatch(signup(user)),
  otherForm: () => dispatch(openModal("login")),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
