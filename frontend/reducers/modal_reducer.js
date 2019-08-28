import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_CURRENT_BOOKING,
  SET_CURRENT_COMMENT
} from "../actions/modal_actions";

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      if (state !== null && state.currentBooking) {
        return {
          type: action.modal,
          props: action.ownProps,
          currentBooking: state.currentBooking
        };
      } else if (state !== null && state.currentComment) {
        return {
          type: action.modal,
          props: action.ownProps,
          currentComment: state.currentComment
        };
      } else {
        return {
          type: action.modal,
          props: action.ownProps
        };
      }
      break;
    case SET_CURRENT_BOOKING:
      return {
        currentBooking: action.booking
      };
    case SET_CURRENT_COMMENT:
      return {
        currentComment: action.review
      };
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
