import React from "react";
import { withRouter } from "react-router-dom";
import RenderStars from "../../comments/stars";
import Carousel from "nuka-carousel";
import { Lazy } from "react-lazy";

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

    let beds, size, bathrooms;
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

    return (
      <div className="listing-index-items">
        <li>
          <div className="image-box">
            <Lazy>
              <Carousel className="lozad">
                <img onClick={this.handleClick} src={window.orange} />
                <img onClick={this.handleClick} src={window.livingroom} />
                <img onClick={this.handleClick} src={window.bedroom} />
                <img onClick={this.handleClick} src={window.pool} />
                <img onClick={this.handleClick} src={window.bedtwo} />
              </Carousel>
            </Lazy>
          </div>
          <div className="quick-info" onClick={this.handleClick}>
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
