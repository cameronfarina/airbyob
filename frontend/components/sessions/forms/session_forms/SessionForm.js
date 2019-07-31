import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlesSubmit = this.handlesSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.closeContainer = this.closeContainer.bind(this);
  }

  toggleClass() {
    const container = document.getElementById("container");

    if (container.classList.contains("right-panel-active")) {
      container.classList.remove("right-panel-active");
    } else {
      container.classList.add("right-panel-active");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handlesSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processSignin(user);
  }

  handleChange(keyOfState) {
    return e =>
      this.setState({
        [keyOfState]: e.currentTarget.value
      });
  }

  renderErrors() {
    return (
      <div>
        <ul className="error-list">
          {this.props.errors.map((error, i) => (
            <li key={i} className="errors">
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  closeContainer() {
    const container = document.getElementById("container");

    container.classList.add("close-form");
  }

  render() {
    return (
      <div
        className={
          this.props.formType === "/login"
            ? "container left-panel-active"
            : "container right-panel-active"
        }
        id="container"
      >
        <span onClick={this.closeContainer} className="left-closeBtn">
          &times;
        </span>
        <div className="form-container sign-up-container">
          <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <h1 className="form-header">Create Account</h1>
            <input
              className="signup-form-input"
              type="text"
              placeholder="Full Name"
              value={this.props.name}
              onChange={this.handleChange("name")}
            />
            <input
              type="email"
              placeholder="Email"
              value={this.props.email}
              onChange={this.handleChange("email")}
            />
            <input
              type="password"
              placeholder="Password"
              value={this.props.password}
              onChange={this.handleChange("password")}
            />
            <button className="form-btn" className="form-btn">
              Sign Up
            </button>
          </form>
        </div>
        <span onClick={this.closeContainer} className="right-closeBtn">
          &times;
        </span>
        <div className="form-container sign-in-container">
          <form onSubmit={this.handlesSubmit}>
            {this.renderErrors()}
            <h1 className="form-header">Log in</h1>
            <input
              className="signin-form-input"
              type="email"
              placeholder="Email"
              value={this.props.email}
              onChange={this.handleChange("email")}
            />
            <input
              type="password"
              placeholder="Password"
              value={this.props.password}
              onChange={this.handleChange("password")}
            />
            <button className="form-btn">Log In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="form-header">Welcome Back!</h1>
              <p>To log into your account, please click below</p>
              <button
                className="ghost form-btn"
                id="signIn"
                onClick={this.toggleClass}
              >
                Log In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="form-header">Hello!</h1>
              <p>If you'd like to create an account, please click below</p>
              <button
                className="ghost form-btn"
                id="signUp"
                onClick={this.toggleClass}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
