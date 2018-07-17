import { connect } from "react-redux";
import MerchDisplay from "../components/MerchDisplay";
import { fetchMerchFromStorage } from "../actions";

const mapStateToProps = reduxState => {
  return {
    merch: reduxState.merch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMerch: () => dispatch(fetchMerchFromStorage()),
    incrementClick: orderId => dispatch(addToOrder(orderId)),
    decrementClick: orderId => dispatch(removeFromOrder(orderId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchDisplay);
