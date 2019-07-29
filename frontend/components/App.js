import React from "react";
import SessionFormContainer from "./sessions/forms/session_forms/SessionFormContainer";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
