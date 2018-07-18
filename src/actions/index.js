export function receiveMerch(merch) {
  return {
    type: "RECEIVE_MERCH",
    merch
  };
}

export function fetchMerchFromStorage() {
  return function (dispatch) {
    fetch("/api/merch")
      .then(response => response.json())
      .then(merch => {
        console.log("merch:", merch);
        dispatch(receiveMerch(merch));
      })
      .catch(function (error) {
        console.log("something went wrong");
      });
  };
}

export function addToOrder(item) {
  return {
    type: "ADD_TO_ORDER",
    item
  };
}

export function removeFromOrder(item) {
  return {
    type: "REMOVE_FROM_ORDER",
    item
  };
}

