export function fetchCalendar() {
  return function (dispatch, getState) {

    return fetch("https://www.googleapis.com/calendar/v3/calendars/lingslabs@gmail.com/events")
      .then(response => response.json())
      .then(json => {
        console.log("data back from fetch ", json)
        dispatch(receiveCalendar(json));
      })
      .catch(error => console.log("Oh no! There's a Gru in the code... ", error));
  }
}

export function receiveCalendar(calendarData) {
  return {
    type: 'RECEIVE_CALENDAR',
    payload: calendarData
  }
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

