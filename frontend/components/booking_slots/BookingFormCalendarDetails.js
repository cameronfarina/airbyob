import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import BookingFormCalculation from "./BookingFormCalculation";
import React from "react";

class BookingFormCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null
    };

    this.disabledDays = [];
    this.checkInDateChanged = this.checkInDateChanged.bind(this);
    this.checkOutDateChanged = this.checkOutDateChanged.bind(this);
    this.illegalDates = this.illegalDates.bind(this);
    this.daysOverlap = this.daysOverlap.bind(this);
    this.daysDontOverlap = this.daysDontOverlap.bind(this);
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
    startDate && endDate && this.daysOverlap(startDate, endDate) ? true : false;
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
    const { listing } = this.props;
    this.illegalDates();

    const num_nights = this.getNumberOfNightsInStay(
      this.state.startDate,
      this.state.endDate
    );

    const today = new Date();
    const start = this.state.startDate
      ? this.followingDate(new Date(this.state.startDate))
      : this.followingDate(today);

    return (
      <div>
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
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          listing={listing}
        />
      </div>
    );
  }
}

export default BookingFormCalendar;
