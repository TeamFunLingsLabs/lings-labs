import { connect } from "react-redux";
import MerchDisplay from "../components/MerchDisplay";
import {
  fetchMerchFromStorage,
  addToOrder,
  removeFromOrder,
  clearBasket
} from "../actions";

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
    decrementClick: item => dispatch(removeFromOrder(item)),
    handleClick: event => {
      event.preventDefault();
      dispatch(clearBasket());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchDisplay);
