function orderReducer(reduxState = {}, action) {
  switch (action.type) {
    case "ADD_TO_ORDER":
      const itemId = action.item.id;
      const oldQuantity = reduxState[itemId];
      const newQuantity = oldQuantity > 0 ? oldQuantity + 1 : 1;

      return { ...reduxState, [itemId]: newQuantity };

    case "REMOVE_FROM_ORDER":
      let newOrderDetails;
      const currentItemIds = action.item.id;
      const newState = { ...reduxState };
      let currentQuantity = newState[itemId];
      // if (currentQuantity > 0) {
      //   currentQuantity -= 1;
      // } else if (currentQuantity === 0) {
      //   newOrderDetails = { ...reduxState };
      //   delete newOrderDetails[itemId];
      // }
      let newOrder;
      console.log("quantity before subtraction", currentQuantity);
      currentQuantity -= 1;
      console.log("quantity", currentQuantity);
      if (currentQuantity <= 0) {
        newOrderDetails = { ...reduxState };
        console.log("newOrderDetails", newOrderDetails);
        delete newOrderDetails.itemId;
      }
      newOrder = Object.assign({}, ...reduxState, {
        [currentItemIds]: currentQuantity
      });
      console.log({ ...reduxState, [currentItemIds]: currentQuantity });
      return newOrder; //{ ...reduxState, [currentItemIds]: currentQuantity };

    default:
      return reduxState;
  }
}

export default orderReducer;
