export const fetchListings = location =>
  $.ajax({
    method: "GET",
    url: "api/listings",
    data: { location }
  });

export const fetchListing = id =>
  $.ajax({
    method: "GET",
    url: `api/listings/${id}`
  });

export const createListing = listing =>
  $.ajax({
    method: "POST",
    url: "api/listings",
    data: listing
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
