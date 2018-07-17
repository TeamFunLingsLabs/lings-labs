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