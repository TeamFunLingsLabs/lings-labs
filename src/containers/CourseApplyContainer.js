import { connect } from "react-redux";
import {
  postApplication,
  setFirstName,
  setLastName,
  setReason,
  setEmail
} from "../actions";
import CourseWrapper from "../components/CourseWrapper";

export const mapStateToProps = reduxState => {
  return { application: reduxState.application };
};

export const mapDispatchToProps = dispatch => {
  return {
    changeFirstName: firstName => {
      dispatch(setFirstName(firstName));
    },

    changeLastName: lastName => {
      dispatch(setLastName(lastName));
    },

    changeReason: reason => {
      dispatch(setReason(reason));
    },

    changeEmail: email => {
      dispatch(setEmail(email));
    },

    postApply: application => {
      dispatch(postApplication(application));
      dispatch(setFirstName(""));
      dispatch(setLastName(""));
      dispatch(setReason(""));
      dispatch(setEmail(""));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseWrapper);
