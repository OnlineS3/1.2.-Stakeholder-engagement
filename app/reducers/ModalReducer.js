const ModalReducer = (state = {}, action) => {
  if(action.type === "openModal"){
    var modals = Object.assign({}, state);
    modals[action.modal] = true;
    return modals;
  } else if(action.type === "closeModal"){
    var modals = Object.assign({}, state);
    modals[action.modal] = false;
    return modals;
  } else {
    return state;
  }
}

export default ModalReducer;
