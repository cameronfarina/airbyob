import React from "react";
import { withRouter } from "react-router-dom";
import Rating from "react-rating";

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comments

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.state.listingId = this.props.listing.id;
    this.props
      .submit(this.state)
      .then(() => this.setState({ rating: null, body: "" }));
  }

  render() {
    if (!this.props.currentUser) {
      return null;
    }

    return (
      <div className="create-review-box">
        <form className="create-review-form">
          <div className="rating">
            <p>Rate your experience </p>
            <div>
              <Rating
                onChange={rating => (this.state.rating = rating)}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
              />
            </div>
          </div>
          <div className="review-body-box">
            {/* <textarea
              value={this.props.body}
              onChange={this.update("body")}
              placeholder="comments here"
            />
            <button onClick={this.handleSubmit}>submit</button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateComment);
