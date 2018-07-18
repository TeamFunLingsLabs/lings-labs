function setApplication(
  state = { firstName: "", lastName: "", reason: "", email: "" },
  action
) {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return Object.assign({}, state, { firstName: action.firstName });

    case "SET_LAST_NAME":
      return Object.assign({}, state, { lastName: action.lastName });

    case "SET_REASON":
      return Object.assign({}, state, { reason: action.reason });

    case "SET_EMAIL":
      return Object.assign({}, state, { email: action.email });

    default:
      return state;
  }
}

export default setApplication;
