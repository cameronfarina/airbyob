import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Splash from "./splash";

const Homepage = ({ currentUser }) => {
  debugger;
  if (currentUser) {
    return (
      <div>
        <Navbar />
      </div>
    );
  } else {
    return (
      <div>
        <Splash />
      </div>
    );
  }
};

export default Homepage;
