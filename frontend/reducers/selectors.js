export const selectCommentsForListing = ({ listings, comments }, listing) => {
  debugger
  return listing.commentIds.map(commentId => comments[commentId]);
};

export const selectListing = ({ listings }, listingId) => {
  return listings[listingId] || { commentIds: [] };
};
