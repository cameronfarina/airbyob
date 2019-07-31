export const selectListing = ({ listings }, listingId) => {
  return listings[listingId];
};

export const asArray = ({ listings }) =>
  Object.keys(listings).map(key => listings[key]);
