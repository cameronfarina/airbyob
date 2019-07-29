import React, { Component } from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "../sessions/greeting/GreetingContainer";
import Autocomplete from "../search/SearchBar";

const navbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__logo">
        <a href="/">Logo</a>
      </div>
      <Autocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}
      />
      <div className="spacer" />
      <div className="toolbar-navigation-items">
        <GreetingContainer />
      </div>
    </nav>
  </header>
);

export default navbar;
