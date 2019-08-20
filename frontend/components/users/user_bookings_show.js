import React from "react";
import BookingShowItem from "./user_booking_show_item";

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBookings();
  }

  render() {
    let userBookingsHeaderInfo;

    if (!this.props.bookings) {
      return null;
    } else if (this.props.bookings.length === 0) {
      userBookingsHeaderInfo = <div />;
      return userBookingsHeaderInfo;
    } else {
      userBookingsHeaderInfo = (
        <div>
          <div className="subheader">Your trips</div>
        </div>
      );
      const bookings = this.props.bookings.map((booking, idx) => (
        <BookingShowItem
          key={idx}
          booking={booking}
          setCurrentBooking={this.props.setCurrentBooking}
          deleteBooking={this.props.deleteBooking}
        />
      ));

      return (
        <div className="user-listing-index-container">
          {userBookingsHeaderInfo}
          <ul className="user-booking-ul">{bookings}</ul>
        </div>
      );
    }
  }
}

export default BookingIndex;
