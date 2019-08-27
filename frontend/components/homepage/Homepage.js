import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Splash from "./splash";
import HomepageFormContainer from "./HomepageFormContainer";
import ListingsGridContainer from "../listings/listing_show/ListingsGridContainer";

const Homepage = ({ currentUser }) => {
  if (currentUser) {
    return (
      <div>
        <ListingsGridContainer />
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
