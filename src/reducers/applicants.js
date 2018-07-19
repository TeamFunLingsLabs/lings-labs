function applicants(state = {}, action) {
  switch (action.type) {

    case "FETCH_APPLICATIONS":
      return action.applicants;
    default:
      return state;
  }
}

export default applicants;
