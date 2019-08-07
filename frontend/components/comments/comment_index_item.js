import React from "react";
import { Link } from "react-router-dom";

const CommentIndexItem = ({
  currentUser,
  listingId,
  comment,
  deleteComment
}) => {
  const toggleDelete = () => {
    if (comment) {
      if (currentUser && currentUser.id == comment.authorId) {
        return (
          <Link
            to={`/listings/${listingId}`}
            onClick={() => deleteComment(comment.id)}
          >
            remove
          </Link>
        );
      }
    } else {
      return 'No Reviews yet!'
    }
  };
  return (
    <li className="review-index-item">
      <div>
        {toggleDelete()}
      </div>
    </li>
  );
};

export default CommentIndexItem;
