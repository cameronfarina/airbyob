import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Splash from "./splash";
import HomepageFormContainer from "./HomepageFormContainer";

const Homepage = ({ currentUser }) => {
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
        <HomepageFormContainer />
      </div>
    );
  }
};

export default Homepage;
