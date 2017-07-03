import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Category from './Category.js';
import AddCategoryContainer from './AddCategoryContainer.js';
import * as actionCreators from '../../actions/actionCreators';


class Categories extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text:"testishit",
      newTitle:"",
      newDescription:"",
                  };
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
        <AddCategoryContainer update={this.addNew}></AddCategoryContainer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNew: () => {
      console.log("clidked")
      dispatch(actionCreators.addCategory(this.state.newTitle, this.state.newDescription));
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Categories);
