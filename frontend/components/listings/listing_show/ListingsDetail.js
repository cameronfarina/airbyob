import React from "react";

const ListingDetail = ({listing}) => {
  return (
    <div>
      <ul className="listing-list">
        <li>Rating: {listing.average_rating || "No reviews yet"}</li>
        <li>Description: {listing.description}</li>
        <li>Price: {listing.price}</li>
        <li>Bathrooms: {listing.bathrooms}</li>
        <li>Latitude: {listing.latitude}</li>
        <li>Longitude: {listing.longitude}</li>
      </ul>
      <br />
    </div>
  );
};

export default ListingDetail;
