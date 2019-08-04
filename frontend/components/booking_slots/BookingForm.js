import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import Calendar from "react-calendar/dist/entry.nostyle";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: null,
      end_date: null,
      num_guests: null,
      listing_id: this.props.listing.id,
      rightHidden: true,
      leftHidden: true
    };

    this.toggleLeftCalendar = this.toggleLeftCalendar.bind(this);
    this.toggleRightCalendar = this.toggleRightCalendar.bind(this);
  }

  toggleLeftCalendar() {
    const calLeft = document.getElementById("left-cal");
    this.setState({
      leftHidden: !this.state.leftHidden
    });

    if (this.state.leftHidden) {
      calLeft.classList.remove("hide-cal");
    } else {
      calLeft.classList.add("hide-cal");
    }
  }
  toggleRightCalendar() {
    const calRight = document.getElementById("right-cal");
    this.setState({
      rightHidden: !this.state.rightHidden
    });

    if (this.state.rightHidden) {
      calRight.classList.remove("hide-cal");
    } else {
      calRight.classList.add("hide-cal");
    }
  }

  render() {
    const taxes = Math.floor(this.props.listing.price * 0.08);
    const cleaningFees = Math.floor(this.props.listing.price * 0.2);
    const totalCost = Math.floor(
      this.props.listing.price + taxes + cleaningFees
    );
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
          <div className="booking-form-fields">
            <div className="booking-form-field left-field">
              <label>CHECK-IN</label>
              <input
                type="text"
                onClick={this.toggleLeftCalendar}
                placeholder="Check In Date"
                className="left-field booking-form-input"
              />
              <div id="left-cal" className="hide-cal form-left-cal">
                <Calendar />
              </div>
            </div>
            <div className="booking-form-field right-field">
              <label>CHECKOUT</label>
              <input
                type="text"
                onClick={this.toggleRightCalendar}
                placeholder="Check Out Date"
                className="right-field booking-form-input"
              />
              <div id="right-cal" className="hide-cal form-right-cal">
                <Calendar />
              </div>
            </div>
          </div>
          <div className="booking-form-field">
            <label>GUESTS</label>
            <input
              type="number"
              placeholder="1 guest"
              min="1"
              className="booking-form-input"
            />
          </div>
          <div className="final-pricing">Taxes: ${taxes}</div>
          <div className="final-pricing">Cleaning Fees: ${cleaningFees}</div>
          <div className="final-pricing">Total Cost: ${totalCost}</div>
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
