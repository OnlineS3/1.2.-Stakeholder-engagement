const CommentReducer = (state = {}, action) => {
  function addIfMissing(comments, area, category){
      if(!comments[area]){
        comments[area] = [];
      }
      if(!comments[area][category]){
        comments[area][category] = [];
      }
  }
  if(action.type === "addCommentSuccess"){
    console.log(state, action)
    var comments;
    if(state)
      comments = JSON.parse(JSON.stringify(state));
    else {
      comments = {};
    }
    addIfMissing(comments, action.AreaName, action.CategoryId);

    comments[action.AreaName][action.CategoryId][action.comment.id] = action.comment;
    return comments;
  } else if(action.type === "deleteCommentSuccess"){
    var comments;
    if(state)
      comments = JSON.parse(JSON.stringify(state));
    else {
      comments = {};
    }
    addIfMissing(comments, action.AreaName, action.CategoryId);
    delete comments[action.AreaName][action.CategoryId][action.id];
    return comments;
  } else if(action.type === "gotComments") {
    console.log(action)
    //var categories = Object.assign({}, action.categories);
    var comments;
    if(state)
      comments = JSON.parse(JSON.stringify(state));
    else {
      comments = {};
    }
    addIfMissing(comments, action.AreaName, action.CategoryId);
    comments[action.AreaName][action.CategoryId] = [];
    action.comments.forEach(comment => {
      comments[action.AreaName][action.CategoryId][comment.id] = comment;
    })

    return comments;
  } else if(action.type === "toggleReplybox") {
    if(state)
      comments = JSON.parse(JSON.stringify(state));
    else {
      comments = {};
    }
    if(comments[action.area] && comments[action.area][action.category]){
      var comment = comments[action.area][action.category][action.id];
      if(comment){
        comment.replyVisible = !comment.replyVisible;
      }
    }
    return comments;
  } else {
    return state;
  }
}

export default CommentReducer;
