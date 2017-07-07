const LoggedInReducer = (state = false, action) => {
  if(action.type === "LOGGED_IN"){
    console.log(state, action)
    if(action.logged_in)
      return true;
    else return false;
  }
  return state;
}

export default LoggedInReducer;
