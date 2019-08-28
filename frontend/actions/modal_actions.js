export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_CURRENT_BOOKING = 'SET_CURRENT_BOOKING';
export const SET_CURRENT_COMMENT = 'SET_CURRENT_COMMENT';

export const openModal = (modal, ownProps) => {
  return {
    type: OPEN_MODAL,
    modal,
    ownProps
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const setCurrentBooking = (booking) => {
  return {
    type: SET_CURRENT_BOOKING,
    booking,
  };
};