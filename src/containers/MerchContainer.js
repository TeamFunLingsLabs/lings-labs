import { connect } from "react-redux";
import MerchDisplay from "../components/MerchDisplay";
import { fetchMerchFromStorage, addToOrder, removeFromOrder } from "../actions";

const mapStateToProps = reduxState => {
  return {
    merch: reduxState.merch,
    order: reduxState.currentOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMerch: () => dispatch(fetchMerchFromStorage()),
    incrementClick: item => dispatch(addToOrder(item)),
    decrementClick: item => dispatch(removeFromOrder(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchDisplay);
