function merchReducer(reduxState = {}, action) {
  switch (action.type) {
    case "RECEIVE_MERCH":
      return action.merch;

    default:
      return reduxState;
  }
}

export default merchReducer;
