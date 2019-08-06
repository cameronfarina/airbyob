import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      numGuests: null,
      listing_id: this.props.listing.id,
      hidden: true,
      extraHidden: true
    };

    this.disabledDays = [];

    this.toggleCal = this.toggleCal.bind(this);
    this.toggleFix = this.toggleFix.bind(this);
    this.checkInDateChanged = this.checkInDateChanged.bind(this);
    this.checkOutDateChanged = this.checkOutDateChanged.bind(this);
    this.illegalDates = this.illegalDates.bind(this);
    this.daysOverlap = this.daysOverlap.bind(this);
    this.daysDontOverlap = this.daysDontOverlap.bind(this);
    this.openExtraInfo = this.openExtraInfo.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleFix);
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.props.clearBookings();
  }

  illegalDates() {
    this.props.bookings.forEach(({ startDate, endDate }) => {
      let current_date = new Date(startDate + " 00:00");
      let finish_date = new Date(endDate + " 00:00");
      while (current_date <= finish_date) {
        let add_date = new Date(current_date);
        this.disabledDays.push(add_date);
        current_date.setDate(current_date.getDate() + 1);
      }
    });
  }

  toggleFix() {
    const formContainer = document.getElementById("booking-form-container");

    if (this.scrollTop > 147) {
      formContainer.classList.add("fix-search");
    } else {
      formContainer.classList.remove("fix-search");
    }
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

  openExtraInfo(e) {
    e.preventDefault();
    const question = document.getElementById("questionMark");
    this.setState({
      extraHidden: !this.state.extraHidden
    });

    if (this.state.extraHidden) {
      question.classList.remove("hide-extra-info");
    } else {
      question.classList.add("hide-extra-info");
    }
  }

  daysOverlap(startDate, endDate) {
    const minDate = new Date(Math.min.apply(null, this.disabledDays));
    const maxDate = new Date(Math.max.apply(null, this.disabledDays));

    if (
      (startDate < minDate && maxDate < endDate) ||
      (minDate < startDate && startDate < maxDate && maxDate < endDate) ||
      (startDate < minDate && (minDate < endDate && endDate < maxDate))
    ) {
      return false;
    } else {
      return true;
    }
  }

  daysDontOverlap({ startDate, endDate }) {
    if (startDate && endDate && this.daysOverlap(startDate, endDate)) {
      return true;
    } else {
      return false;
    }
  }

  checkInDateChanged(day) {
    this.setState({ startDate: day });
  }

  checkOutDateChanged(day) {
    this.setState({ endDate: day });
  }

  followingDate(day) {
    const followingDate = new Date(day);
    followingDate.setDate(day.getDate() + 1);
    return followingDate;
  }

  getNumberOfNightsInStay(startDate, endDate) {
    const checkInDate = new Date(startDate);
    const checkOutDate = new Date(endDate);
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

  render() {
    this.illegalDates();
    const num_nights = this.getNumberOfNightsInStay(
      this.state.startDate,
      this.state.endDate
    );

    this.cleaningFees = 10 * num_nights;
    this.totalCosts = Math.floor(this.props.listing.price * num_nights);
    this.serviceFees = Math.floor((this.totalCosts + this.cleaningFees) * 0.2);
    this.occupancyTaxes = Math.floor(this.totalCosts * 0.08);
    this.finalPrice = Math.floor(
      this.occupancyTaxes + this.serviceFees + this.totalCosts
    );

    const finalPricingSection =
      this.state.startDate && this.state.endDate ? (
        <div>
          <div className="final-pricing">
            <span>
              ${Math.floor(this.props.listing.price)} x {num_nights}
            </span>
            <span className="right-side">${this.totalCosts}</span>
          </div>
          <div className="final-pricing">
            <span>
              Service fee{" "}
              <button onClick={this.openExtraInfo}>
                <i className="far fa-question-circle" />
              </button>
              <div className="hide-extra-info" id="questionMark">
                This is for the site
              </div>
            </span>{" "}
            <span className="right-side">${this.serviceFees}</span>
          </div>
          <div className="final-pricing">
            <span>
              Occupancy taxes and fees{" "}
              <button onClick={this.openExtraInfo}>
                <i className="far fa-question-circle" />
              </button>
              <div className="hide-extra-info" id="questionMark">
                This is for the site
              </div>
            </span>{" "}
            <span className="right-side">${this.occupancyTaxes}</span>
          </div>
          <div className="final-pricing">
            <span>Total</span>{" "}
            <span className="right-side">${this.finalPrice}</span>
          </div>
        </div>
      ) : null;

    const today = new Date();
    const start = this.state.startDate
      ? this.followingDate(new Date(this.state.startDate))
      : this.followingDate(today);

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
          <div className="booking-form-field">
            <label>GUESTS</label>
            <input
              type="number"
              placeholder="1 guest"
              min="1"
              className="booking-form-input"
            />
          </div>
          {finalPricingSection}
          <div className="reserve-button">
            <button>Reserve</button>
          </div>
          {/* {this.errors()} */}
        </form>
        <div className="charged">You won't be charged yet</div>
      </div>
    );
  }
}

export default BookingForm;
