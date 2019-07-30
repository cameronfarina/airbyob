import * as ListingApiUtil from "../util/listing_api_util";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveListing = ({ listing }) => ({
  type: RECEIVE_LISTING,
  listing
});

export const removeListing = listing => ({
  type: REMOVE_LISTING,
  listingId: listing.id
});

export const fetchListings = () => dispatch =>
  ListingApiUtil.fetchListings().then(listings =>
    dispatch(receiveListings(listings))
  );

export const fetchListing = id => dispatch =>
  ListingApiUtil.fetchListing(id).then(payload =>
    dispatch(receiveListing(payload))
  );

export const createListing = listing => dispatch =>
  ListingApiUtil.createListing(listing).then(listing =>
    dispatch(receiveListing(listing))
  );

export const updateListing = id => dispatch =>
  ListingApiUtil.updateListing(id).then(listing =>
    dispatch(receiveListing(listing))
  );

export const deleteListing = id => dispatch =>
  ListingApiUtil.deleteListing(id).then(listing =>
    dispatch(removeListing(listing))
  );
