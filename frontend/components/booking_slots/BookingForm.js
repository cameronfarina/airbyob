import React from "react";
import Calendar from "../calendar/Calendar";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: null,
      end_date: null,
      num_guests: null,
      listing_id: this.props.listing.id,
      hidden: true
    };

    this.toggleCal = this.toggleCal.bind(this);
    this.toggleFix = this.toggleFix.bind(this);
  }

  toggleFix() {
    const bFC = $("#booking-form-container");

    bFC.toggleClass("fix-search", this.scrollTop > 147);
  }

  toggleCal() {
    const cal = document.getElementById("cal");
    this.setState({
      hidden: !this.state.hidden
    });

    if (this.state.hidden) {
      cal.classList.remove("hide-cal");
    } else {
      cal.classList.add("hide-cal");
    }
  }

  render() {
    const taxes = Math.floor(this.props.listing.price * 0.08);
    const cleaningFees = Math.floor(this.props.listing.price * 0.2);
    const totalCost = Math.floor(
      this.props.listing.price + taxes + cleaningFees
    );
    return (
      <div className="booking-form-container" id="booking-form-container">
        <div className="price-container">
          <span className="price-tag">
            ${Math.floor(this.props.listing.price)}
          </span>
          per night
        </div>
        <div className="line" />
        <form className="booking-request-form-container">
          <div className="booking-form-fields">
            <div className="check-in-and-out">
              <label>Dates</label>
              <i className="fas fa-arrow-right"></i>
              <input
                onClick={this.toggleCal}
                placeholder="Check-in           Checkout"
                className="booking-form-input"
              />
              <div id="cal" className="hide-cal">
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
