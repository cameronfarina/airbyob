import React from "react";
import BookingFormIndex from "./BookingFormIndex";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.errors = this.errors.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.props.clearBookings();
  }

  errors() {
    if (this.props.errors.bookings) {
      return this.props.errors.bookings.map((error, idx) => {
        if (error.includes("End")) {
          error = "Must specify check-out date";
        } else if (error.includes("guest")) {
          error = "Guest has to be more than 1 person";
        } else if (error.includes("Start")) {
          error = "Must specify check-in date";
        }
        return <li key={idx}>{error}</li>;
      });
    }
  }

  render() {
    const { bookings, listing } = this.props;
    return (
      <div>
        <BookingFormIndex listing={listing} bookings={bookings} />
        {this.errors()}
      </div>
    );
  }
}

export default BookingForm;
