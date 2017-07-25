import React from 'react';
import { Link } from 'react-router';
import AddCommentContainer from './AddCommentContainer.js';

const CommentElement = ({id, title, description, depth, area, category, comments}) => {
  const style = {
    background: depth%2 === 0 ? "grey" : "lightgrey",
    "margin-left": "10px",
    "max-width": "700px"
  }

  return (
    <div style={style}>
      <h3> {title}</h3>
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
            >
          </CommentElement>
      })}
      <AddCommentContainer parentId={id} id={id} area={area} category={category}></AddCommentContainer>
    </div>
  )
}

export default CommentElement;
