function orderReducer(reduxState = {}, action) {
  switch (action.type) {
    case "ADD_TO_ORDER":
      const oldValue = reduxState[action.orderId];
      const newValue = oldValue ? oldValue + 1 : 1;
      const newState = Object.assign({}, reduxState, {
        [action.orderId]: newValue
      });
      return newState;

    case "REMOVE_FROM_ORDER":
      return reduxState;

    default:
      return reduxState;
  }
}

export default orderReducer;
