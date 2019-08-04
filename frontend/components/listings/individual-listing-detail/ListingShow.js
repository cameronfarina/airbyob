import React from "react";
import ListingDetail from "./ListingsDetail";

const ListingShow = ({ listing, listingId, fetchListing, reviews }) => {
  return (
    <div className="main-section">
      <ListingDetail listing={listing} reviews={reviews} />
    </div>
  );
};

export default ListingShow;
