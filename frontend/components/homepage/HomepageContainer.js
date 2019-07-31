import { connect } from "react-redux";
import Homepage from "./Homepage";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

export default connect(
  mapStateToProps
)(Homepage);
