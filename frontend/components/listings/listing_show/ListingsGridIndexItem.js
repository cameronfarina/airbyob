import React from "react";
import { withRouter } from "react-router-dom";
import RenderStars from "../../comments/stars";

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
        <li>
          <div className="image-box">
            <img src={window.orange} />
          </div>
          <div className="quick-info">
            <p className="info-size">{size}</p>
            <h4>
              {listing.city}, {listing.state}
            </h4>
            <p>
              {listing.beds} {beds} · {listing.bathrooms} {bathrooms}{" "}
            </p>
            <p>{`$${Math.floor(listing.price)}/night`} · Free cancellation</p>
            <RenderStars rating={averageRating} />
          </div>
        </li>
      </div>
    );
  }
}

export default withRouter(ListingIndexItem);
