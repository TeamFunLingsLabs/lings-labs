function calendar(state = "", action) {
  switch (action.type) {
    case 'RECEIVE_CALENDAR':
      return action.payload;
    default:
      return state;
  }
}

export default calendar;
