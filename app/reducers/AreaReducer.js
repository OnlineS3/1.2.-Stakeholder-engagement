const AreaReducer = (state = {}, action) => {
  if(action.type === "addAreaSuccess"){
    console.log(state, action)
    var areas;
    if(state)
      areas = Object.assign({}, state);
    else {
       areas = {};
    }
    areas[action.area.name] = action.area;
    return areas;
  } else if(action.type === "gotAreas") {
    var areas = {};
    action.areas.forEach(area => {
      areas[area.name] = area;
    });
    return areas;
  }/* else if(action.type === "TOGGLE_AREA") {
    var areas = state.concat();
    var admin = false;
    areas.forEach(area => {
      if(area.name === action.area){
        areas.selected = Object.assign({}, area);
        return areas;
      }
    })
    return areas;
  }*/ else {
    //if(state.length === 0) state.selected = null;
    return state;
  }
}

export default AreaReducer;
