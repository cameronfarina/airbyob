import * as ListingApiUtil from "../util/listing_api_util";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveListing = ({ listing, comments, authors }) => ({
  type: RECEIVE_LISTING,
  listing,
  comments,
  authors
});

export const receiveComment = ({ comment, average_rating, author }) => ({
  type: RECEIVE_COMMENT,
  comment,
  average_rating,
  author
});

export const removeListing = listing => ({
  type: REMOVE_LISTING,
  listingId: listing.id
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  listingId: comment.id
});

export const fetchListings = location => dispatch =>
  ListingApiUtil.fetchListings(location).then(listings =>
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

export const createComment = comment => dispatch =>
  ListingApiUtil.createComment(comment).then(comment =>
    dispatch(receiveComment(comment))
  );

export const updateListing = id => dispatch =>
  ListingApiUtil.updateListing(id).then(listing =>
    dispatch(receiveListing(listing))
  );

export const deleteListing = id => dispatch =>
  ListingApiUtil.deleteListing(id).then(listing =>
    dispatch(removeListing(listing))
  );

export const deleteComment = id => dispatch =>
  ListingApiUtil.deleteComment(id).then(comment =>
    dispatch(removeComment(comment))
  );
