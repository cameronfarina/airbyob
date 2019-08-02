import React, { Fragment } from "react";
import SessionFormContainer from "./sessions/forms/session_forms/SessionFormContainer";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomepageContainer from "../components/homepage/HomepageContainer";
import ListingsContainer from "../components/listings/listing_show/ListingsContainer";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomepageContainer} />
      <Route exact path="/listings" component={ListingsContainer} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
