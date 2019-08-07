import * as APICommentUtil from "../util/comment_api_util";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchComments = () => dispatch =>
  APICommentUtil.fetchComments().then(
    comments => dispatch(receiveComments(comments)),
    errors => dispatch(receiveErrors(errors))
  );

export const fetchComment = commentId => dispatch =>
  APICommentUtil.fetchComment(commentId).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors))
  );

export const createComment = comment => dispatch =>
  APICommentUtil.createComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors))
  );

export const updateComment = comment => dispatch =>
  APICommentUtil.updateComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors))
  );

export const deleteComment = commentId => dispatch =>
  APICommentUtil.deleteComment(commentId).then(
    commentId => dispatch(removeComment(commentId)),
    errors => dispatch(receiveErrors(errors))
  );
