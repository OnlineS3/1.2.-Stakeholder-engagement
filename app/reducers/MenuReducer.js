const MenuReducer = (state = false, action) => {
  if(action.type === "TOGGLE_USER_MENU"){
    return !state;
  }
  return state;
}

export default MenuReducer;
