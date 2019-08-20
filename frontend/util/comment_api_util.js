export const fetchComment = commentId =>
  $.ajax({
    method: "GET",
    url: `/api/listings/${commentId}`
  });

export const createComment = (id, comment) =>
  $.ajax({
    method: "POST",
    url: `api/listings/${id}/comments`,
    data: { comment }
  });

export const updateComment = comment =>
  $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: { booking }
  });

export const deleteComment = id =>
  $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`
  });
