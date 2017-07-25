import React from 'react';
import { Link } from 'react-router';
import AddCommentContainer from './AddCommentContainer.js';

const CommentElement = ({id, title, description, depth, area, category}) => {
  const style = {
    background: depth%2 === 0 ? "grey" : "lightgrey",
    "margin-left": "10px",
    "max-width": "700px"
  }

  return (
    <div style={style}>
      <h3> {title}</h3>
      <p> {description} </p>
      <AddCommentContainer parentId={id} id={id} area={area} category={category}></AddCommentContainer>
    </div>
  )
}

export default CommentElement;
