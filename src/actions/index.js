export function receiveMerch(merch) {
  return {
    type: "RECEIVE_MERCH",
    merch
  };
}

export function fetchMerchFromStorage() {
  return function(dispatch) {
    fetch("/api/merch")
      .then(response => response.json())
      .then(merch => {
        console.log("merch:", merch);
        dispatch(receiveMerch(merch));
      })
      .catch(function(error) {
        console.log("something went wrong");
      });
  };
}

export function addToOrder(orderId) {
  return {
    type: "ADD_TO_ORDER",
    orderId
  };
}

export function removeFromOrder(orderId) {
  return {
    type: "REMOVE_FROM_ORDER",
    orderId
  };
}
