import React from "react";
import BookingFormCalendar from "./BookingFormCalendarDetails";
import BookingFormCalculation from "./BookingFormCalculation";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.reserveListing = this.reserveListing.bind(this);
  }

  reserveListing(e) {
    e.preventDefault();
  }

  render() {
    const { bookings, listing } = this.props;
    return (
      <div className="booking-form-container" id="booking-form-container">
        <div className="price-container">
          <span className="price-tag">
            ${Math.floor(this.props.listing.price)}
          </span>
          per night
        </div>
        <div className="line" />
        <form
          onSubmit={this.reserveListing}
          className="booking-request-form-container"
        >
          <BookingFormCalendar bookings={bookings} listing={listing} />
          <BookingFormCalculation listing={listing} />
          <div className="booking-form-field">
            <label>GUESTS</label>
            <input
              type="number"
              placeholder="1 guest"
              min="1"
              className="booking-form-input"
            />
          </div>
          <div className="reserve-button">
            <button>Reserve</button>
          </div>
        </form>
        <div className="charged">You won't be charged yet</div>
      </div>
    );
  }
}

export default BookingForm;
