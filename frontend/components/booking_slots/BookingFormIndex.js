import React from "react";
import BookingForm from "./BookingForm";
import { Link } from 'react-router-dom';

class BookingFormIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAllBookings();
  }

  render() {
    const { bookings, listing, createBooking, currentUser } = this.props;

    return (
      <div>
        <BookingForm
          createBooking={createBooking}
          listing={listing}
          currentUser={currentUser}
          bookings={bookings}
          price={listing.price}
          beds={listing.beds}
          bathrooms={listing.bathrooms}
          city={listing.city}
          furnished={listing.furnished}
          average_rating={listing.average_rating}
        />
      </div>
    );
  }
}

export default BookingFormIndex;
