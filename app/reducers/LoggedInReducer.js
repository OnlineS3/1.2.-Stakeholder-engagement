const LoggedInReducer = (state = false, action) => {
  if(action.type === "GOT_USER"){
    return action.user;
  }
  return state;
}

export default LoggedInReducer;
