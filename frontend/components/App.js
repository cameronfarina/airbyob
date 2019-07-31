import React, { Fragment } from "react";
import SessionFormContainer from "./sessions/forms/session_forms/SessionFormContainer";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomepageContainer from "../components/homepage/HomepageContainer";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomepageContainer} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
