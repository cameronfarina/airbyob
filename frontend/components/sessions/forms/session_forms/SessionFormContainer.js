import { connect } from "react-redux";
import SessionForm from "./SessionForm";
import { signup, login, clearErrors } from "../../../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: ownProps.match.path
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  processSignin: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
