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
export const changeArea = (area) => {
  return {
    type: 'TOGGLE_AREA',
    area
  }
}
export function getUser() {
  return function (dispatch){
    fetch("/api/user", {
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
  return function (dispatch, getState){
    fetch("/api/category/new", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({title, description, area: getState().areas.selected.name})
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if(res.category){
        dispatch(addCategorySuccess(res.category, res.area));
      } else {
        //TODO: display error
      }
    }).then(() => {
      dispatch(reset('addCategory'));
    })
  }
}
export const addCategorySuccess = (category, area) => {
  return {
    type: 'addCategorySuccess',
    category,
    area
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
    fetch("/api/category/all", {
      credentials: 'include',
    })
      .then(res => {console.log("body", res.body); return res;})
      .then(res => res.json())
      .then(categories => {
        console.log(categories)
        dispatch(gotCategories(categories))
      })
  }
}
export function addArea(name) {
  return function (dispatch, getState){
    fetch("/api/area/new", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({name})
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if(res.area){
        dispatch(addAreaSuccess(res.area));
      } else {
        //TODO: display error
      }
    }).then(() => {
      dispatch(reset('addArea'));
    })
  }
}
export function fetchAreas() {
  return function (dispatch){
    fetch("/api/area/all", {
      credentials: 'include',
    })
      .then(res => {console.log("body", res.body); return res;})
      .then(res => res.json())
      .then(areas => {
        console.log(areas)
        if(areas instanceof Array)
          dispatch(gotAreas(areas))
      })
  }
}
export function joinArea(key) {
  return function (dispatch, getState){
    fetch("/api/area/join", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({key})
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if(res.area){
        dispatch(addAreaSuccess(res.area));
      } else {
        //TODO: display error
      }
    }).then(() => {
      dispatch(reset('joinArea'));
    })
  }
}

export function fetchComments(areaName, categoryId) {
  return function (dispatch){
    fetch("/api/comments", {
      headers: {
        "content-type": "application/json"
      },
      credentials: 'include',
      method: "POST",
      body: JSON.stringify({areaName, categoryId})
    })
      .then(res => res.json())
      .then(comments => {
        console.log(comments)
        dispatch(gotComments(areaName, categoryId, comments))
      })
  }
}

export const addAreaSuccess = (area) => {
  return {
    type: 'addAreaSuccess',
    area
  }
}
export const gotAreas = (areas) => {
  return {
    type: 'gotAreas',
    areas
  }
}

export const openModal = (modal) => {
  return {
    type: 'openModal',
    modal
  }
}
export const closeModal = (modal) => {
  return {
    type: 'closeModal',
    modal
  }
}
