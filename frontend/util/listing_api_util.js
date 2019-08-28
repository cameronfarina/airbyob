export const fetchListings = filter =>
  $.ajax({
    method: "GET",
    url: "api/listings",
    data: { filter }
  });

export const fetchListing = id =>
  $.ajax({
    method: "GET",
    url: `api/listings/${id}`
  });

export const createComment = (id, comment) =>
  $.ajax({
    method: "POST",
    url: `api/listings/${id}/comments`,
    data: { comment }
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

export const deleteComment = id =>
  $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`
  });

export const fetchComments = () => {
  return $.ajax({
    method: "GET",
    url: "api/comments"
  });
};

export const fetchComment = id => {
  return $.ajax({
    method: "GET",
    url: `api/comments/${id}`
  });
};

export const updateComment = comment => {
  return $.ajax({
    method: "PATCH",
    url: `api/comments/${comment.id}`,
    data: { comment: comment }
  });
};
