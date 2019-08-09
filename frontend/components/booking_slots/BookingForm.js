import React from "react";
import { withRouter } from "react-router-dom";
import BookingFormCalculation from "./BookingFormCalculation";
import { renderStars } from "../comments/stars";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: null,
      end_date: null,
      num_guests: 1,
      listing_id: props.listing.id,
      user_id: props.currentUser.id
    };

    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disabledDays = [];
    this.checkInDateChanged = this.checkInDateChanged.bind(this);
    this.checkOutDateChanged = this.checkOutDateChanged.bind(this);
    this.invalidDates = this.invalidDates.bind(this);
    this.daysOverlap = this.daysOverlap.bind(this);
    this.daysDontOverlap = this.daysDontOverlap.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const bookingParams = {
      listing_id: this.props.listing.id,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      user_id: this.state.user_id,
      num_guests: this.state.num_guests
    };

    if (this.props.currentUser) {
      this.state.user_id = this.props.currentUser.id;
      this.props
        .createBooking(bookingParams)
        .then(() => this.props.history.push("/trips"));
    } else {
      this.props.history.push("/login");
    }
  }

  invalidDates() {
    this.props.bookings.forEach(({ start_date, end_date }) => {
      let current_date = new Date(start_date + " 00:00");
      let finish_date = new Date(end_date + " 00:00");
      while (current_date <= finish_date) {
        let add_date = new Date(current_date);
        this.disabledDays.push(add_date);
        current_date.setDate(current_date.getDate() + 1);
      }
    });
  }

  daysOverlap(start_date, end_date) {
    const minDate = new Date(Math.min.apply(null, this.disabledDays));
    const maxDate = new Date(Math.max.apply(null, this.disabledDays));

    if (
      (start_date < minDate && maxDate < end_date) ||
      (minDate < start_date && start_date < maxDate && maxDate < end_date) ||
      (start_date < minDate && (minDate < end_date && end_date < maxDate))
    ) {
      return false;
    } else {
      return true;
    }
  }

  daysDontOverlap({ start_date, end_date }) {
    start_date && end_date && this.daysOverlap(start_date, end_date)
      ? true
      : false;
  }

  checkInDateChanged(day) {
    this.setState({ start_date: day });
  }

  checkOutDateChanged(day) {
    this.setState({ end_date: day });
  }

  followingDate(day) {
    const followingDate = new Date(day);
    followingDate.setDate(day.getDate() + 1);
    return followingDate;
  }

  getNumberOfNightsInStay(start_date, end_date) {
    const checkInDate = new Date(start_date);
    const checkOutDate = new Date(end_date);
    const checkInDays = Date.UTC(
      checkInDate.getFullYear(),
      checkInDate.getMonth(),
      checkInDate.getDate()
    );
    const checkOutDays = Date.UTC(
      checkOutDate.getFullYear(),
      checkOutDate.getMonth(),
      checkOutDate.getDate()
    );
    return Math.floor((checkOutDays - checkInDays) / (1000 * 60 * 60 * 24));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { listing } = this.props;
    this.invalidDates();

    let ratingLength;
    if (Object.keys(listing.comments).length > 0) {
      ratingLength = listing.comments.length;
    }

    const num_nights = this.getNumberOfNightsInStay(
      this.state.start_date,
      this.state.end_date
    );

    const today = new Date();
    const start = this.state.start_date
      ? this.followingDate(new Date(this.state.start_date))
      : this.followingDate(today);
    return (
      <div className="booking-form-container" id="booking-form-container">
        <form
          onSubmit={this.handleSubmit}
          className="booking-request-form-container"
        >
          <div className="booking-form-price">
            <span className="booking-form-price-text">
              <strong>${Math.floor(this.props.listing.price)}</strong>
            </span>
            <span className="booking-form-text">per night</span>
            <div className="booking-form-stars">
              {renderStars(listing.average_rating)}
              <p className="p-stars">{ratingLength}</p>
            </div>
            <div className="splash-form-field inline">
              <div className="splash-form-inline-field booking-input">
                <label>CHECK-IN</label>
                <DayPickerInput
                  formatDate={formatDate}
                  parseDate={parseDate}
                  placeholder={"mm/dd/yyy"}
                  dayPickerProps={{
                    disabledDays: [
                      ...this.disabledDays,
                      {
                        before: today
                      }
                    ]
                  }}
                  onDayChange={this.checkInDateChanged}
                />
              </div>
              <div className="splash-form-inline-field booking-input">
                <label>CHECKOUT</label>
                <DayPickerInput
                  formatDate={formatDate}
                  parseDate={parseDate}
                  placeholder={"mm/dd/yyy"}
                  dayPickerProps={{
                    month: start,
                    disabledDays: [
                      ...this.disabledDays,
                      {
                        before: start
                      }
                    ]
                  }}
                  onDayChange={this.checkOutDateChanged}
                />
              </div>
            </div>
            <BookingFormCalculation
              num_nights={num_nights}
              start_date={this.state.start_date}
              end_date={this.state.end_date}
              listing={listing}
            />
          </div>
          <div className="booking-form-field">
            <label>GUESTS</label>
            <input
              type="number"
              placeholder="1 guest"
              onChange={myGuests =>
                this.setState({
                  guests: myGuests
                })
              }
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

export default withRouter(BookingForm);
