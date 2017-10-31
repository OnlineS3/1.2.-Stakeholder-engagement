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
export const closeMenu = (id) => {
  return {
    type: 'CLOSE_MENU',
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
export function addCategory(title, description, areaName) {
  return function (dispatch, getState){
    fetch("/api/category/new", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({title, description, area: areaName})
    })
    .then(res => res.json())
    .then(res => {
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
export const editCategory = (category, area) => {
  return {
    type: 'editCategory',
    category,
    area
  }
}
export function editCategorySubmit(title, description, area, category){
  return function (dispatch, getState){
    fetch("/api/category/edit", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({title, description, area, category})
    })
    .then(res => res.json())
    .then(res => {
      if(res.category){
        dispatch(editCategorySuccess(res.category, res.area));
      } else {
        //TODO: display error
      }
    }).then(() => {
      dispatch(reset('editCategory'));
    })
  }
}
export const editCategorySuccess = (category, area, title, description) => {
  return {
    type: 'editCategorySuccess',
    category,
    area,
    title,
    description
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
      .then(res => res.json())
      .then(categories => {
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
      .then(res => res.json())
      .then(areas => {
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

export function fetchComments(area, category) {
  return function (dispatch){
    fetch("/api/comment/category", {
      headers: {
        "content-type": "application/json"
      },
      credentials: 'include',
      method: "POST",
      body: JSON.stringify({area, category})
    })
      .then(res => res.json())
      .then(comments => {
        dispatch(gotComments(area, category, comments))
      })
  }
}

export function gotComments(AreaName, CategoryId, comments){
  return {
    type: 'gotComments',
    comments: comments,
    AreaName,
    CategoryId
  }
}

export function addComment(area, category, title, description, parentId) {
  return function (dispatch, getState){
    fetch("/api/comment/new", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({title, description, area, category, parentId})
    })
    .then(res => res.json())
    .then(res => {
      if(res){
        dispatch(addCommentSuccess(area, category, res));
      } else {
        //TODO: display error
      }
    }).then(() => {
      dispatch(reset(`addComment[${parentId}]`));
    })
  }
}
export function deleteComment(area, category, id) {
  return function (dispatch, getState){
    fetch("/api/comment/delete", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({area, category, id})
    })
    .then(res => res.json())
    .then(res => {
      if(res){
        dispatch(deleteCommentSuccess(area, category, id));
      } else {
        //TODO: display error
      }
    })
  }
}
export const addCommentSuccess = (AreaName, CategoryId, comment) => {
  return {
    type: 'addCommentSuccess',
    AreaName,
    CategoryId,
    comment
  }
}
export const deleteCommentSuccess = (AreaName, CategoryId, id) => {
  return {
    type: 'deleteCommentSuccess',
    AreaName,
    CategoryId,
    id
  }
}

export function vote(area, category, id, up) {
  return function (dispatch, getState){
    fetch("/api/comment/vote", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({area, category, id, up})
    })
    .then(res => res.json())
    .then(res => {
      if(res){
        dispatch(voteSuccess(area, category, id, up));
      } else {
        //TODO: display error
      }
    })
  }
}
export const voteSuccess = (area, category, id, up) => {
  return {
    type: 'voteSuccess',
    area,
    category,
    id,
    up
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
export const toggleReplybox = (area, category, id) => {
  return {
    type: 'toggleReplybox',
    area,
    category,
    id
  }
}

export const sortBy = (type) => {
  return {
    type: 'sortBy',
    attribute: type
  }
}
