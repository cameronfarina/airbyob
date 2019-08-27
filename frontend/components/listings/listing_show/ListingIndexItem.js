import React from "react";
import { withRouter } from "react-router-dom";
import renderStars from "../../comments/stars";

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const listingId = this.props.listing.id;
    this.props.history.push(`/listings/${listingId}`);
  }

  render() {
    const { listing } = this.props;
    let averageRating;
    if (listing.average_rating) {
      averageRating =
        parseInt(listing.average_rating) / listing.average_rating.length;
    } else {
      averageRating = "No reviews yet";
    }

    let beds, size, bathrooms, furnished;
    if (listing.beds === 1) {
      beds = "bed";
      size = "PRIVATE ROOM IN APARTMENT";
    } else {
      beds = "beds";
      size = "ENTIRE APARTMENT";
    }

    if (listing.bathrooms === 1) {
      bathrooms = "bathroom";
    } else {
      bathrooms = "bathrooms";
    }

    if (listing.furnished) {
      furnished = "This listing is furnished!";
    } else {
      furnished =
        "This listing is not furnished, please remember to bring your own bed!";
    }
    const features = "Wifi - Kitchen - Free Parking";
    return (
      <div className="listing-index-items" onClick={this.handleClick}>
        <div className="index-item-info">
          <ul className="listing-list">
            <div className="individual-listing">
              <div className="listing-image">
                <img src={window.orange} />
              </div>
              <div className="listing-details">
                <div className="listing-header">
                  <h5>{size}</h5>
                </div>
                <div className="listing-details-specific">
                  <li>
                    {listing.beds} {beds}
                  </li>
                  <span className="details-breaker">.</span>
                  <li>
                    {listing.bathrooms} {bathrooms}
                  </li>
                </div>
                <div className="listing-features">
                  <li>{features}</li>
                </div>
                <div className="listing-furnished">
                  <li>{furnished}</li>
                </div>
                <div className="listing-review">
                  <li>{renderStars(averageRating)}</li>
                </div>
                <div className="listing-price">
                  <li>{`$${Math.floor(listing.price)}/night`}</li>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(ListingIndexItem);
