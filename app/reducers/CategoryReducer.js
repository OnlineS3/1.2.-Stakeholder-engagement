const CategoryReducer = (state = {}, action) => {
  if(action.type === "addCategorySuccess"){
    console.log(state, action)
    var categories;
    if(state)
      categories = JSON.parse(JSON.stringify(state));
    else {
      categories = {};
    }
    if(categories[action.area]){
      categories[action.area].push(action.category);
    } else {
      categories[action.area] = [action.category];
    }
    return categories;
  } else if(action.type === "gotCategories") {
    var categories = Object.assign({}, action.categories);
    return categories;
  } else {
    return state;
  }
}

export default CategoryReducer;
