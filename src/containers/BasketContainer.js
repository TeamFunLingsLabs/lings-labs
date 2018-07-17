import { connect } from "react-redux";
import Basket from "../components/Basket";

const mapStateToProps = reduxState => {
  return {
    merch: reduxState.merch
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchMerch: () => dispatch(fetchMerchFromStorage())
//   };
// };

export default connect(
  mapStateToProps,
  null
)(Basket);
