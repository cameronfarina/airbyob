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

  render() {
    // debugger;
    return (
      <div
        className={
          this.props.formType === "/login"
            ? "container left-panel-active"
            : "container right-panel-active"
        }
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <h1>Create Account</h1>
            <input
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
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={this.handlesSubmit}>
            {this.renderErrors()}
            <h1>Sign in</h1>
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
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To log into your account, please enter your login info</p>
              <button className="ghost" id="signIn" onClick={this.toggleClass}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello!</h1>
              <p>Enter your personal details to create your account</p>
              <button className="ghost" id="signUp" onClick={this.toggleClass}>
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
