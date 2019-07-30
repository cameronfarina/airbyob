import React from "react";
import SessionFormContainer from "./sessions/forms/session_forms/SessionFormContainer";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Navbar from "./navbar/Navbar";
import cities from "../components/search/Cities";
import countries from "../components/search/Countries";
import states from "../components/search/States";

const App = () => {
  return (
    <div>
      <header>
        <Navbar cities={cities} countries={countries} states={states} />
      </header>

      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
