export const exampleAction = (parameter) => {
  return {
    type: 'EXAMPLE_TYPE',
    parameter
  }
}
export const addCategory = (title, description) => {
  return {
    type: 'addCategory',
    title: title,
    description: description
  }
}
export const addCategorySuccess = () => {
  return {
    type: 'addCategorySuccess',
  }
}

export const requestCategories = () => {
  return {
    type: 'requestCategories',
  }
}

export const gotCategories = (json) => {
  return {
    type: 'gotCategories',
    categories: json
  }
}

export function fetchCategories() {
  return function (dispatch){
    dispatch(requestCategories());
    fetch("api/category/all")
      .then(res => {console.log("body", res.body); return res;})
      .then(res => res.json())
      .then(categories => {
        console.log(categories)
        dispatch(gotCategories(categories))
      })
  }
}
