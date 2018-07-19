function orderReducer(reduxState = {}, action) {

  switch (action.type) {

    case "ADD_TO_ORDER":

      const itemId = action.item.id;
      const oldQuantity = reduxState[itemId];
      let newQuantity = oldQuantity > 0 ? oldQuantity + 1 : 1;

      const newOrder = Object.assign({}, reduxState, { [itemId]: newQuantity })

      return newOrder;

    case "REMOVE_FROM_ORDER":
      const removeItemId = action.item.id;
      const removeQuantity = reduxState[removeItemId];
      let amendedOrder;

      if (removeQuantity >= 2) {
        let newQuantity = removeQuantity - 1;
        amendedOrder = Object.assign({}, reduxState, { [removeItemId]: newQuantity })
      }
      else { // order must be 1, in which case  delete item from state

        const removeOrder = Object.assign({}, reduxState) //clone
        delete removeOrder[removeItemId]  //delete item from clone

        amendedOrder = Object.assign({}, ...reduxState, removeOrder) //overwrite state with new empty item
      }

      return amendedOrder;

    default:
      return reduxState;
  }
}

export default orderReducer;
