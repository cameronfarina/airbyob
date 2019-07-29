import { connect } from "react-redux";
import SessionForm from "./SessionForm";
import { signup, login } from "../../../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: ownProps.match.path
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  processSignin: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
