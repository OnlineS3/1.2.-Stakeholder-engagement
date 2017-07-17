const MenuReducer = (state = {}, action) => {

  if(action.type === "TOGGLE_MENU"){
    var open = !state[action.id];
    var newState = Object.assign({}, state);
    newState[action.id] = open;
    return newState;
  } else if (action.type === "openModal"){
    return {}; //opening a modal closes all menus
  }
  return state;
}

export default MenuReducer;
