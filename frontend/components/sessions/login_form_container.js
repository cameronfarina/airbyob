import React from "react";
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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

  changeModal() {
    this.props.clearErrors();
    this.props.closeModal();
    this.props.otherForm();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  logInDemoUser(e) {
    e.preventDefault();

    this.state = {
      email: "",
      password: ""
    };

    const demoUser = {
      email: "demo@gmail.com",
      password: "123456"
    };

    let password = "123456";
    const demoLoginCallback = () => {
      setTimeout(() => {
        if (password.length > 0) {
          this.setState({
            email: "demo@gmail.com",
            password: this.state.password.concat(password[0])
          });
          password = password.slice(1);
          demoLoginCallback();
        } else {
          this.props.clearErrors();
          this.props.processForm(demoUser).then(this.props.closeModal);
        }
      }, 125);
    };

    this.props.clearErrors();
    demoLoginCallback();
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
            <h2 className="login-modal-header">Log in to continue</h2>
            <div className="errors-div">{this.renderErrors()}</div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Email Address"
                onChange={this.handleChange("email")}
                value={this.state.email}
              />
            </div>

            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                onChange={this.handleChange("password")}
                value={this.state.password}
              />
            </div>

            <div className="session-buttons">
              <button className="form-submit-button">Log in</button>
              <button
                type="button"
                id="demo-user-button"
                onClick={e => this.logInDemoUser(e)}
              >
                Log in as demo user
              </button>
            </div>

            <div className="login-modal-bottom-container">
              <span className="modal-nav-link-text">
                Don't have an account?{" "}
              </span>
              <span className="signup-span" onClick={() => this.changeModal()}>
                Sign up
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
    formType: "login"
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: () => dispatch(openModal("signup")),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
