import React from "react";
import { withRouter } from "react-router-dom";
import Rating from "react-rating";
import ReactStars from "react-stars";

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleRatingChange(newRating) {
    this.setState({ rating: newRating });
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  navigateToListing() {
    const url = `/listings/${this.props.match.params.listingId}`;
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    let listingId;
    listingId = this.props.match.params.listingId;
    this.props
      .createComment(listingId, this.state)
      .then(() => this.setState({ rating: undefined, body: "" }));

    this.navigateToListing();
  }

  render() {
    if (!this.props.currentUser) {
      return null;
    }

    return (
      <div className="create-review-box">
        <form onSubmit={this.handleSubmit} className="create-review-form">
          <div className="rating">
            <p>Rate your experience </p>
            <div className="comment-stars">
              <ReactStars
                value={this.state.rating}
                count={5}
                size={20}
                edit={true}
                color2={"#26c4bcce"}
                onChange={this.handleRatingChange}
              />
            </div>
          </div>
          <div className="review-body-box">
            <textarea
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Leave a review here!"
              className="review-text-area"
            />
            <button className="submit-review-button">Submit Review</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateComment);
