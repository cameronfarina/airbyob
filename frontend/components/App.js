import React, { Fragment } from "react";
import SessionFormContainer from "./sessions/forms/session_forms/SessionFormContainer";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomepageContainer from "../components/homepage/HomepageContainer";
import ListingsDetailContainer from "./listings/individual-listing-detail/ListingDetailContainer";
import ListingsContainer from "../components/listings/listing_show/ListingsContainer";
import UserBookingShowContainer from "../components/users/user_bookings_show_container";
import Modal from "./modal/Modal";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const App = () => {
  return (
    <div>
      <Modal />
      <Route exact path="/" component={HomepageContainer} />
      <Route exact path="/listings" component={ListingsContainer} />
      <Route path="/listings/:listingId" component={ListingsDetailContainer} />
      <ProtectedRoute
        exact
        path="/trips"
        component={UserBookingShowContainer}
      />
    </div>
  );
};

export default App;
