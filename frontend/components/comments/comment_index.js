import React from "react";
import CommentIndexItem from "./comment_index_item";
import CreateCommentContainer from "./create_comment_container";

export default class CommentIndex extends React.Component {
  render() {
    let {
      rating,
      comments,
      fetchListing,
      currentUser,
      deleteComment
    } = this.props;

    let num = Object.values(comments).length;
    let commentsCount = num ? `${num} Reviews` : "No Reviews yet";
    commentsCount = num === 1 ? `${num} Review` : `${num} Reviews`;
    let commentsList = Object.values(comments).map((comment, i) => {
      return (
        <CommentIndexItem
          key={i + comment.body}
          listingId={comment.listing_id}
          comment={comment}
          currentUser={currentUser}
          deleteComment={deleteComment}
          fetchListing={fetchListing}
        />
      );
    });

    return (
      <div className="review-container">
        <div className="review-search-bar">
          <h4>
            {commentsCount}
          </h4>
        </div>

        <div className="review-index-container">
          <ul className="review-index">{commentsList}</ul>
        </div>

        <CreateCommentContainer currentUser={currentUser} />
      </div>
    );
  }
}
