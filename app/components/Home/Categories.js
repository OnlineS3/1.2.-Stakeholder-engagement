import React from 'react';
import { Link } from 'react-router';
import Category from './Category.js';

class Categories extends React.Component {
  constructor(props){
    super(props);
    this.state = {text:"testishit"};
  }

  componentDidMount(){
    fetch("api/category/all")
      .then(res => {console.log("body", res.body); return res;})
      .then(res => res.json())
      .then(categories => {
        return categories.map(category => {
          return <Category id={category.id} title={category.title} description={category.description}></Category>
        });
      }).then(categories => {
        console.log(categories)
        this.setState({categories: categories})
      })
  }

  render(){
      return (
      <div>
        <h2>{this.state.text}</h2>
        {this.state.categories}
      </div>
    )
  }
}

export default Categories;
