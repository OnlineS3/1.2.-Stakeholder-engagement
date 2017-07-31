import React from 'react';
import { Link } from 'react-router';

const Category = ({id, title, description, url}) => {
  return (
    <div className="row">
      <div className="col">
        <Link to={url}>
          <h2>{id} {title}</h2>
        </Link>
        <p> {description} </p>
      </div>
    </div>
  )
}

export default Category;
