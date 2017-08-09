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
    var comments;
    if(state)
      comments = JSON.parse(JSON.stringify(state));
    else {
      comments = {};
    }
    addIfMissing(comments, action.AreaName, action.CategoryId);

    comments[action.AreaName][action.CategoryId][action.comment.id] = action.comment;
    if(action.comment.parentId !== 0){
      comments[action.AreaName][action.CategoryId][action.comment.parentId].replyVisible = false;
    }

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
        var visible = comment.replyVisible;
        comments[action.area][action.category].forEach(comment => {
          if(comment)
            comment.replyVisible = false;
        })
        comment.replyVisible = !visible;
      }
    }
    return comments;
  } else if(action.type === "voteSuccess") {
    if(state)
      comments = JSON.parse(JSON.stringify(state));
    else {
      comments = {};
    }
    if(comments[action.area] && comments[action.area][action.category]){
      var comment = comments[action.area][action.category][action.id];
      if(comment){
        if(comment.own) comment.score -= comment.own;
        comment.score += action.up?1:-1;
        comment.own = action.up?1:-1;
        console.log(comment.score)
      }
    }
    return comments;
  } else {
    return state;
  }
}

export default CommentReducer;
