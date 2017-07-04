const CategoryReducer = (state = [], action) => {
  if(action.type === "addCategorySuccess"){
    console.log(state, action)
    var categories;
    if(state)
      categories = state.concat();
    else categories = [];
    categories.push(action.category);
    return categories;
  } else if(action.type === "gotCategories") {
    var categories = action.categories.map(category => Object.assign(category, {status: "ok"}));
    return categories;
  } else {
    return state;
  }
}

export default CategoryReducer;
