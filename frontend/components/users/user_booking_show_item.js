import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../listings/individual-listing-detail/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class BookingShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClickDeleteBooking = this.handleClickDeleteBooking.bind(this);
  }

  handleClickDeleteBooking(bookingId) {
    this.props.deleteBooking(bookingId);
  }

  render() {
    return (
      <li className="booking-listing-item-container">
        <Link to={`/listings/${this.props.booking.listing_id}`}>
          <div>
            <Carousel showThumbs={false} />
          </div>
        </Link>

        <div>
          <div className="booking-text-container">
            <p className="booking-text">
              Check In: {this.props.booking.start_date}
            </p>
            <p className="booking-text">
              Check Out: {this.props.booking.end_date}
            </p>
          </div>
          <div className="booking-buttons-container">
            <button
              className="booking-submit-button"
              onClick={() =>
                this.handleClickDeleteBooking(this.props.booking.id)
              }
            >
              Cancel Reservation
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default BookingShowItem;
