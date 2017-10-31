const CategoryReducer = (state = {}, action) => {
  if(action.type === "addCategorySuccess"){
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
  } else if(action.type === "editCategory") {
    var categories;
    if(state)
      categories = JSON.parse(JSON.stringify(state));
    else {
      categories = {};
    }
    if(categories[action.area]){
      var category = categories[action.area].filter(category => category.id === action.category)[0];
      if(category){
        var editing = category.editing;
        categories[action.area].forEach(category => {
          if(category)
            category.editing = false;
        })
        category.editing = !editing;
      }
    }
    return categories;
  } else if(action.type === "editCategorySuccess"){
    var categories;
    if(state)
      categories = JSON.parse(JSON.stringify(state));
    else {
      categories = {};
    }
    if(categories[action.area]){
      var category = categories[action.area].filter(category => category.id === action.category.id)[0];
      if(category){
        categories[action.area].forEach(category => {
          if(category)
            category.editing = false;
        })
        category.title = action.category.title;
        category.description = action.category.description;
      }
    }
    return categories;
  } else if(action.type === "deleteCategorySuccess"){
    var categories;
    if(state)
      categories = JSON.parse(JSON.stringify(state));
    else {
      categories = {};
      return categories;
    }
    if(categories[action.area]){
      for(var i = 0; i < categories[action.area].length; i++){
        if(categories[action.area][i] && categories[action.area][i].id === action.category.id){
          categories[action.area][i] = null;
        }
      }
    }
    return categories;
  } else {
    return state;
  }
}

export default CategoryReducer;
