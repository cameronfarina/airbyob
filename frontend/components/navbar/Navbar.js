import React from "react";
import GreetingContainer from "../sessions/greeting/GreetingContainer";
import SearchBarContainer from "../search/SearchBarContainer";



const navbar = () => (
  <div className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__logo">
        <a href="/">
          <img src={window.logo} className="logo" />
        </a>
      </div>
      <SearchBarContainer />
      <div className="spacer" />
      <div className="toolbar-navigation-items">
        <GreetingContainer />
      </div>
    </nav>
  </div>
);

export default navbar;
