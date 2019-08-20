import * as CommentAPIUtil from "../util/comment_api_util";
import { receiveErrors } from "./session_actions";
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

export const removeComment = id => ({
  type: REMOVE_COMMENT,
  id
});

// export const fetchComments = () => dispatch =>
//   CommentAPIUtil.fetchComments().then(
//     comments => dispatch(receiveComments(comments)),
//     errors => dispatch(receiveErrors(errors))
//   );

export const fetchComment = commentId => dispatch =>
  CommentAPIUtil.fetchComment(commentId).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors))
  );

export const createComment = (id, comment) => dispatch =>
  CommentAPIUtil.createComment(id, comment).then(
    comment => dispatch(receiveComment(id, comment)),
    errors => dispatch(receiveErrors(errors))
  );

export const updateComment = comment => dispatch =>
  CommentAPIUtil.updateComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const deleteComment = commentId => dispatch =>
  CommentAPIUtil.deleteComment(commentId).then(
    commentId => dispatch(removeComment(commentId)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
