import React from "react";
import { withRouter } from "react-router-dom";
import ListingsDetail from "./ListingsDetail";

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
    let beds, size;
    if (listing.beds === 1) {
      beds = "bed";
      size = "PRIVATE ROOM IN APARTMENT";
    } else {
      beds = "beds";
      size = "ENTIRE APARTMENT";
    }

    let bathrooms;
    if (listing.bathrooms === 1) {
      bathrooms = "bathroom";
    } else {
      bathrooms = "bathrooms";
    }

    const features = "Wifi - Kitchen - Free Parking";
    return (
      <div className="listing-index-items" onClick={this.handleClick}>
        <div className="index-item-info">
          <ul className="listing-list">
            <div className="individual-listing">
              <div className="listing-image">
                <img src={window.livingroom} />
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
                  <li>Furnished: {`${listing.furnished}`}</li>
                </div>
                <div className="listing-review">
                  <li>{listing.average_rating || "No reviews yet"}</li>
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
