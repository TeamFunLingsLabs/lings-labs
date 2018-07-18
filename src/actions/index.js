
export function postApplication(application) {
  return function (dispatch, getState) {
    fetch("/api/applications", {
      method: "post",
      body: JSON.stringify(application),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json();
    });
  };
}

export function setFirstName(firstName) {
  return {
    type: "SET_FIRST_NAME",
    firstName
  };
}

export function setLastName(lastName) {
  return {
    type: "SET_LAST_NAME",
    lastName
  };
}

export function setReason(reason) {
  return {
    type: "SET_REASON",
    reason
  };
}

export function setEmail(email) {
  return {
    type: "SET_EMAIL",
    email
  };
}


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
