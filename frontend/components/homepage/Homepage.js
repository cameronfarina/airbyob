import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Splash from "./splash";
import HomepageForm from "./HomepageForm";

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
        <HomepageForm />
      </div>
    );
  }
};

export default Homepage;
