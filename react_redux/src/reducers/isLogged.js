const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return (state = true);
    case "SIGN_out":
      return (state = false);
    default:
      return state;
  }
};

export default loggedReducer