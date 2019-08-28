import * as ListingApiUtil from "../util/listing_api_util";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";

export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

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

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeListing = listing => ({
  type: REMOVE_LISTING,
  listingId: listing.id
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  listingId: comment
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

export const createComment = (id, comment) => dispatch =>
  ListingApiUtil.createComment(id, comment).then(comment =>
    dispatch(receiveListing(comment))
  );

export const updateListing = listing => dispatch =>
  ListingApiUtil.updateListing(listing).then(listing =>
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

export const updateComment = comment => {
  return dispatch => {
    return ListingApiUtil.updateComment(comment).then(comment => {
      return dispatch(receiveComment(comment));
    });
  };
};

export const fetchComments = () => {
  return dispatch => {
    return ListingApiUtil.fetchComments().then(comments => {
      return dispatch(receiveComments(comments));
    });
  };
};

export const fetchComment = id => {
  return dispatch => {
    return ListingApiUtil.fetchComment(id).then(comment => {
      return dispatch(receiveComment(comment));
    });
  };
};
