import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const openContainer = () => {
    if (!document.getElementById("container")) {
      return;
    } else if (container.classList.contains("close-form")) {
      container.classList.remove("close-form");
    }
  };

  const isLoggedIn = () => (
    <div>
      <ul>
        <li>
          <Link to="/" onClick={logout}>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );

  const isNotLoggedIn = () => (
    <div>
      <ul>
        <li>
          <Link to="/login" className="loginButton" onClick={openContainer}>
            Log in
          </Link>
        </li>
        <br />
        <li>
          <Link to="/signup" className="loginButton" onClick={openContainer}>
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
  return currentUser ? isLoggedIn() : isNotLoggedIn();
};

export default Greeting;
