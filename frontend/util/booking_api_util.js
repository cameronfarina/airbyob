export const fetchAllBookings = () =>
  $.ajax({
    method: "GET",
    url: "api/bookings"
  });

export const fetchBooking = id => {
  return $.ajax({
    method: "GET",
    url: `api/bookings/${id}`
  });
};

export const createBooking = booking => {
  return $.ajax({
    method: "POST",
    url: `api/listings/${booking.listing_id}/bookings`,
    data: { booking: payload(booking) }
  });
};

export const updateBooking = booking =>
  $.ajax({
    method: "PATCH",
    url: `api/bookings/${booking.id}`,
    data: { booking: payload(booking) }
  });

export const deleteBooking = bookingId =>
  $.ajax({
    method: "DELETE",
    url: `api/bookings/${bookingId}`
  });

const payload = booking => ({
  start_date: booking.startDate,
  end_date: booking.endDate,
  num_guests: booking.num_guests,
  user_id: booking.user_id,
  listing_id: booking.listing_id
});
