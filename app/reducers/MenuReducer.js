const MenuReducer = (state = {}, action) => {

  if(action.type === "TOGGLE_MENU"){
    var open = !state[action.id];
    var newState = Object.assign({}, state);
    newState[action.id] = open;
    return newState;
  } else if(action.type === "CLOSE_MENU"){
    var newState = Object.assign({}, state);
    newState[action.id] = false;
    return newState;
  } else if (action.type === "openModal"){
    return {}; //opening a modal closes all menus
  } else if (action.type === "TOGGLE_AREA"){
    return {}; //changing the area closes all menus
  }
  return state;
}

export default MenuReducer;
