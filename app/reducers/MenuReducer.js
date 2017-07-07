const MenuReducer = (state = {}, action) => {

  if(action.type === "TOGGLE_MENU"){
    var open = !state[action.id];
    var newState = Object.assign({}, state);
    newState[action.id] = open;
    return newState;
  }
  return state;
}

export default MenuReducer;
