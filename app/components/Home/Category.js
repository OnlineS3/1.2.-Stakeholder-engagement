import React from 'react';
import { Link } from 'react-router';

const Category = ({id, title, description}) => {
  return (
    <div>
      <h2>{id} {title}</h2>
      <p> {description} </p>
    </div>
  )
}

export default Category;
