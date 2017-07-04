import {reset} from 'redux-form';

export const exampleAction = (parameter) => {
  return {
    type: 'EXAMPLE_TYPE',
    parameter
  }
}
export function addCategory(title, description) {
  return function (dispatch){
    fetch("api/category/new", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({title, description})
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch(addCategorySuccess(res.category));
    }).then(() => {
      dispatch(reset('addCategory'));
    })
  }
}
export const addCategorySuccess = (category) => {
  return {
    type: 'addCategorySuccess',
    category
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
