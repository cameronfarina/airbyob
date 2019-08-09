import React from "react";
import { Link, withRouter } from "react-router-dom";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.comment,
      currentUser: this.props.currentUser,
      listingId: this.props.listingId
    };

    this.deleteUserComment = this.deleteUserComment.bind(this);
    this.showButtons = this.showButtons.bind(this);
  }

  deleteUserComment() {
    this.props.deleteComment(this.state.comment.id);
  }

  showButtons() {
    const { currentUser, comment } = this.props;
    if (currentUser && currentUser.id === comment.author_id) {
      return <button onClick={this.deleteUserComment}>Delete Comment</button>;
    }
  }

  render() {
    const { comment } = this.props;
    return (
      <li className="review-index-item">
        <div>
          <span className="reviewer">Guest # {comment.author_id}</span>
          {this.showButtons()}
        </div>
        <p>
          {comment.body
            ? comment.body
            : "Be the first to leave a review for this listing!"}
        </p>
      </li>
    );
  }
}

export default withRouter(CommentIndexItem);
