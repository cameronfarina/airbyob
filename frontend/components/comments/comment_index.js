import React from "react";

import CommentIndexItem from "./comment_index_item";
import CreateCommentContainer from "./create_comment_container";
import Stars from "./stars";

const commentSearch = () => (
  <div className="search-bar">
    <i className="fas fa-search" />
    <input placeholder="Search comments" />
  </div>
);

export default class CommentIndex extends React.Component {
  render() {
    let { rating, comments, listings, currentUser, deleteComment } = this.props;

    let num = comments.length;
    let commentsCount = comments ? `${num} Reviews` : 'No Reviews yet';
    const commentsList = comments ? (
      <div>
        <CommentIndexItem
          listings={listings}
          comments={comments}
          currentUser={currentUser}
          deleteComment={deleteComment}
        />
      </div>
    ) : (
      <div>
        <CommentIndexItem
          currentUser={currentUser}
          deleteComment={deleteComment}
        />
      </div>
    );

    return (
      <div className="review-container">
        <div className="review-search-bar">
          <h4>
            {commentsCount} <Stars rating={rating} />
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
