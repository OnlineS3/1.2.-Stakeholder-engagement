import React from 'react';
import { Link } from 'react-router';
import AddCommentContainer from './AddCommentContainer.js';
import CommentContainer from './CommentContainer.js';

const CommentElement = ({id, title, description, depth, area, category, comments, user, showReply, replyVisible}) => {
  const style = {
    background: depth%2 === 0 ? "grey" : "lightgrey",
    "margin-left": "10px",
    "margin-top": "5px",
    "max-width": "700px"
  }
  const headerStyle = {

  }
  var reply;
  if(replyVisible){
    reply = (
    <div>
      <div className="row">
      </div>
      <div className="row">
        <div className="col">
          <AddCommentContainer parentId={id} id={id} area={area} category={category}></AddCommentContainer>
        </div>
      </div>
    </div>)
  } else {
    reply = <div className="col-2" onClick={showReply}> Reply </div>
  }

  return (
    <div style={style}>
      <div className="row">
        <div className="col col-4">{title}</div>
        <div className="col col-2 push-6 text-right">{user}</div>
      </div>
      <div className="row">
        <div className="col">
          <p> {description} </p>
        </div>
      </div>
      { comments && comments.filter(comment => comment && comment.parentId && (comment.parentId === id)).map((comment) => {
        return <CommentContainer
            key={comment.id}
            id={comment.id}
            title={comment.title}
            description={comment.description}
            depth={depth+1}
            area={area}
            category={category}
            user={comment.user}
            comments={comments}
            replyVisible={comment.replyVisible}
            >
          </CommentContainer>
      })}
      <div className="col-2" onClick={showReply}> { replyVisible ? "Cancel" : "Reply" } </div>
      {replyVisible &&
        <div>
          <div className="row">
            <div className="col">
              <AddCommentContainer parentId={id} id={id} area={area} category={category}></AddCommentContainer>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default CommentElement;
