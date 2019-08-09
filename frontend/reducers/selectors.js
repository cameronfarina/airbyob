export const selectCommentsForListing = ({ listings, comments }, listing) =>
  listing ? listing.commentIds.map(commentId => comments[commentId]) : [];

export const userBookings = state => {
  let bookings = [];
  if (state.session) {
    const user = state.entities.users[state.session.id];
    if (user.bookings.length !== 0) {
      bookings = user.bookings.map(id => {
        return state.entities.bookings[id];
      });
    }
  } else {
    bookings = null;
  }

  return bookings;
};
