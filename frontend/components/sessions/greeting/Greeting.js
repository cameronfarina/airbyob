import React from "react";
import { Link } from "react-router-dom";
import faker from "faker";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.openContainer = this.openContainer.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.isNotLoggedIn = this.isNotLoggedIn.bind(this);
  }
  openContainer() {
    if (!document.getElementById("container")) {
      return;
    } else if (container.classList.contains("close-form")) {
      container.classList.remove("close-form");
    }
  }

  toggleDropdown() {
    const dropdown = document.getElementById("profile-dropdown");
    this.setState({
      hidden: !this.state.hidden
    });

    if (this.state.hidden) {
      dropdown.classList.remove("hide-dropdown");
    } else {
      dropdown.classList.add("hide-dropdown");
    }
  }

  isLoggedIn() {
    const { logout } = this.props;
    return (
      <div>
        <div>
          <div className="profile-container">
            <button onClick={this.toggleDropdown}>
              <img
                src={faker.image.avatar()}
                alt="avatar"
                id="avatar"
                className="avatar"
              />
            </button>

            <div
              className="profile-dropdown-menu hide-dropdown"
              id="profile-dropdown"
            >
              <ul className="profile-dropdown-list">
                <li className="profile-dropdown-list-item">
                  <Link to="/" onClick={logout}>
                    Log Out
                  </Link>
                </li>
                <li className="profile-dropdown-list-item">
                  <Link to="/" onClick={logout}>
                    Log Out
                  </Link>
                </li>
                <li className="profile-dropdown-list-item">
                  <Link to="/" onClick={logout}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  isNotLoggedIn() {
    return (
      <div className="navbar-list">
        <ul className="navbar-list-items">
          <li className="navbar-link-item">
            <Link
              to="/login"
              className="loginButton"
              onClick={this.openContainer}
            >
              Log in
            </Link>
          </li>
          <br />
          <li className="navbar-link-item">
            <Link
              to="/signup"
              className="loginButton"
              onClick={this.openContainer}
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return this.props.currentUser ? this.isLoggedIn() : this.isNotLoggedIn();
  }
}

export default Greeting;
