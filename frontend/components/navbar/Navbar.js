import React, { Component } from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "../sessions/greeting/GreetingContainer";
import Autocomplete from "../search/SearchBar";
const navbar = ({ cities, states, countries }) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__logo">
        <a href="/">
          <img src={window.logo} className="logo" />
        </a>
      </div>
      <Autocomplete suggestions={[cities, states, countries]} />
      <div className="spacer" />
      <div className="toolbar-navigation-items">
        <GreetingContainer />
      </div>
    </nav>
  </header>
);

export default navbar;
