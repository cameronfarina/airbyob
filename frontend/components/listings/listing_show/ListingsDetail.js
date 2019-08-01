import React from "react";
import { Link } from "react-router";

const ListingDetail = ({ listing }) => {
  return (
    <div>
      <ul className="listing-list">
        <li>Rating: {listing.average_rating || "No reviews yet"}</li>
        <li>Description: {listing.description}</li>
        <li>Price: {listing.price}</li>
        <li>Beds: {listing.beds}</li>
        <li>Bathrooms: {listing.bathrooms}</li>
        <li>Latitude: {listing.latitude}</li>
        <li>Longitude: {listing.longitude}</li>
      </ul>
      <br />
      <div className="reviews">
        <h3>Reviews</h3>
        {reviewList(reviews) || "No reviews yet"}
      </div>
    </div>
  );
};

export default ListingDetail;
