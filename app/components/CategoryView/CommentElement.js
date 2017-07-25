import React from 'react';
import { Link } from 'react-router';
import AddCommentContainer from './AddCommentContainer.js';

const CommentElement = ({id, title, description, depth, area, category, comments, user}) => {
  const style = {
    background: depth%2 === 0 ? "grey" : "lightgrey",
    "margin-left": "10px",
    "max-width": "700px"
  }
  const headerStyle = {
    
  }

  return (
    <div style={style}>
      <div className="row">
        <div className="col col-4">{title}</div>
        <div className="col col-2 push-6 text-right">{user}</div>
      </div>
      <p> {description} </p>
      { comments && comments.filter(comment => comment && comment.parentId && (comment.parentId === id)).map((comment) => {
        return <CommentElement
            key={comment.id}
            id={comment.id}
            title={comment.title}
            description={comment.description}
            depth={depth+1}
            comments={comments}
            area={area}
            category={category}
            user={comment.user}
            >
          </CommentElement>
      })}
      <AddCommentContainer parentId={id} id={id} area={area} category={category}></AddCommentContainer>
    </div>
  )
}

export default CommentElement;
