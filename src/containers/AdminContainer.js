import { connect } from "react-redux";
import Admin from "../components/Admin";
import { fetchApplicants } from "../actions";

const mapStateToProps = reduxState => {
  return {
    applicants: reduxState.applicants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    displayApplicants: () => dispatch(fetchApplicants())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
