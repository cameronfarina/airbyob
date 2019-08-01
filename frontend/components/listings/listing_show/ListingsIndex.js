import React from 'react';
import ListingIndexItem from './ListingIndexItem';

const ListingIndex = ({ listings }) => (
  <div>
    <h1>Listings: </h1>
    {listings.map(listing => (
      <ListingIndexItem
        listing={listing}
        key={listing.id}
      />
    ))}
  </div>
);

export default ListingIndex;
