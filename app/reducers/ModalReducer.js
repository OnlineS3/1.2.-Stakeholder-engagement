const ModalReducer = (state = {}, action) => {
  if(action.type === "openModal"){
    var modals = Object.assign({}, state);
    modals[action.modal] = true;
    return modals;
  } else if(action.type === "closeModal"){
    var modals = Object.assign({}, state);
    modals[action.modal] = false;
    return modals;
  } else if(action.type === "addAreaSuccess" || action.type === "addCategorySuccess"){
    var modals = Object.assign({}, state);
    for(var key in modals){
      if(modals.hasOwnProperty(key)){
        modals[key] = false;
      }
    }
    return modals;
  } else {
    return state;
  }
}

export default ModalReducer;
