import {reset} from 'redux-form';

export const exampleAction = (parameter) => {
  return {
    type: 'EXAMPLE_TYPE',
    parameter
  }
}
export const toggleMenu = (id) => {
  return {
    type: 'TOGGLE_MENU',
    id
  }
}
export function getUser() {
  return function (dispatch){
    fetch("api/user", {
      headers: {
      },
      method: "GET",
      credentials: 'include',
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch(gotUser(res));
    })
  }
}
export const gotUser = (user) => {
  return {
    type: 'GOT_USER',
    user
  }
}
export function addCategory(title, description) {
  return function (dispatch){
    fetch("api/category/new", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      credentials: 'include',
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
    fetch("api/category/all", {
      credentials: 'include',
    })
      .then(res => {console.log("body", res.body); return res;})
      .then(res => res.json())
      .then(categories => {
        console.log(categories)
        if(categories instanceof Array)
          dispatch(gotCategories(categories))
      })
  }
}

export function fetchAreas() {
  return function (dispatch){
    fetch("api/areas/all", {
      credentials: 'include',
    })
      .then(res => {console.log("body", res.body); return res;})
      .then(res => res.json())
      .then(areas => {
        console.log(areas)
        if(areas instanceof Array)
          dispatch(gotCategories(areas))
      })
  }
}
