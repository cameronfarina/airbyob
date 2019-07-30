import React from "react";
import SessionFormContainer from "./sessions/forms/session_forms/SessionFormContainer";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Navbar from "./navbar/Navbar";
import cities from "../components/search/Cities";
import countries from "../components/search/Countries";
import states from "../components/search/States";
// import Map from "../components/map/Map";

const App = () => {
  return (
    <div>
      <div>
        <Navbar cities={cities} countries={countries} states={states} />
        <AuthRoute exact path="/login" component={SessionFormContainer} />
        <AuthRoute exact path="/signup" component={SessionFormContainer} />
        {/* <Route exact path="/listings" component={ListingsContainer } /> */}
      </div>

      {/* <Map center={{ lat: 18.5204, lng: 73.8567 }} height="300px" zoom={15} /> */}
    </div>
  );
};

export default App;
