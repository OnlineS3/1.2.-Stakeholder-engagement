const LoggedInReducer = (state = false, action) => {
  if(action.type === "GOT_USER"){
    console.log(state, action)
    return action.user;
  }
  return state;
}

export default LoggedInReducer;
