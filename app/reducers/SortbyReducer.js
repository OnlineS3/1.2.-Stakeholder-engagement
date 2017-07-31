const SortbyReducer = (state = {}, action) => {
  if(action.type === "sortBy"){
    return action.attribute;
  } else {
    //if(state.length === 0) state.selected = null;
    return state;
  }
}

export default SortbyReducer;
