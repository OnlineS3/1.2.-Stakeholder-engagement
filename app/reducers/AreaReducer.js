const AreaReducer = (state = [], action) => {
  if(action.type === "addAreaSuccess"){
    console.log(state, action)
    var areas;
    if(state)
      areas = state.concat();
    else {
       areas = [];
    }
    areas.push(action.area);
    areas.selected = action.area;
    return areas;
  } else if(action.type === "gotAreas") {
    var areas = action.areas;
    if(areas.length === 0){
      areas.selected = null;
    } else if (areas.length === 1){
      areas.selected = areas[0];
    } else {
      var i;
      if((i = areas.indexOf(state.selected)) !== -1){
        areas.selected = areas[i];
      } else {
        areas.selected = areas[0];
      }
    }
    return areas;
  } else if(action.type === "TOGGLE_AREA") {
    var areas = state.concat();
    var admin = false;
    areas.forEach(area => {
      if(area.name === action.area){
        areas.selected = Object.assign({}, area);
        return areas;
      }
    })
    return areas;
  } else {
    if(state.length === 0) state.selected = null;
    return state;
  }
}

export default AreaReducer;
