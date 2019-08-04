import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: null,
      end_date: null,
      num_guests: null,
      listing_id: this.props.listing.id
    };

    this.disabledDays = [];
  }

  render() {
    const taxes = Math.floor(this.props.listing.price * 0.08);
    const cleaningFees = Math.floor(this.props.listing.price * 0.2);
    const totalCost = Math.floor(this.props.listing.price + taxes + cleaningFees);
    return (
      <div className="booking-form-container">
        <div className="price-container">
          <span className="price-tag">
            ${Math.floor(this.props.listing.price)}
          </span>
          per night
        </div>
        <div className="draw-line" />
        <form className="booking-request-form-container">
          <div className="booking-form-field-inline">
            <div className="booking-form-inline-field">
              <label>CHECK-IN</label>
              <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={"MM-DD-YYYY"}
              />
            </div>
            <div className="booking-form-inline-field">
              <label>CHECKOUT</label>
              <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={"MM-DD-YYYY"}
              />
            </div>
          </div>
          <div className="booking-form-field">
            <label>GUESTS</label>
            <input type="number" placeholder="Guests" min="1" />
          </div>
          Taxes: ${taxes}
          <br />
          Cleaning Fees: ${cleaningFees}
          <br />
          Total Cost: ${totalCost}
          <div className="booking-button">
            <button>Book</button>
          </div>
        </form>
        <div className="no-charge">You won't be charged yet</div>
      </div>
    );
  }
}

export default BookingForm;
