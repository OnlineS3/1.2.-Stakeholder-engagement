import React from 'react';
import { Link } from 'react-router';

const Category = ({id, title, description, url}) => {
  return (
    <div>
      <Link to={url}>
        <h2>{id} {title}</h2>
      </Link>
      <p> {description} </p>
    </div>
  )
}

export default Category;
