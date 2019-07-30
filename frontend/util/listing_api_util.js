export const fetchListings = listings =>
  $.ajax({
    method: "GET",
    url: "api/listings",
    listings
  });

export const fetchListing = id =>
  $.ajax({
    method: "GET",
    url: `api/listings/${id}`
  });

export const createListing = listingForm =>
  $.ajax({
    method: "POST",
    url: "api/listings",
    data: listingForm
  });

export const updateListing = listing =>
  $.ajax({
    method: "PATCH",
    url: `api/listings/${listing.id}`,
    data: { listing }
  });

export const deleteListing = id =>
  $.ajax({
    method: "DELETE",
    url: `api/listings/${id}`
  });
