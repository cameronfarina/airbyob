import React from "react";
import GreetingContainer from "../sessions/greeting/GreetingContainer";

const splashbar = () => (
  <header className="splashbar">
    <nav className="splashbar__navigation">
      <div />
      <div className="splashbar__logo">
        <a href="/">
          <img src={window.logo} className="splash-logo" />
        </a>
      </div>
      <div className="splashbar-spacer" />
      <div className="splashbar-navigation-items">
        <GreetingContainer />
      </div>
    </nav>
  </header>
);

export default splashbar;
