import React from "react";
import ListingDetail from "./ListingsDetail";

const ListingShow = ({
  listing,
  listingId,
  fetchListing,
  bookings,
  fetchAllBookings,
  fetchComments,
  comments
}) => {
  return (
    <div className="main-section">
      <ListingDetail
        bookings={bookings}
        listingId={listingId}
        fetchListing={fetchListing}
        fetchAllBookings={fetchAllBookings}
        fetchComments={fetchComments}
        listing={listing}
        comments={comments}
      />
    </div>
  );
};

export default ListingShow;
