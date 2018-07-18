export function postApplication(application) {
  return function(dispatch, getState) {
    fetch("/api/applications", {
      method: "post",
      body: JSON.stringify(application),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
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
