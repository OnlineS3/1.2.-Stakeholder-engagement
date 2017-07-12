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
    this.props.onMount();
  }


  render(){
    console.log(this.props)
      return (
      <div>
        <h2>{this.state.text}</h2>
        { this.props.categories && this.props.categories.map((category) => {
          return <Category key={category.id} id={category.id} title={category.title} description={category.description}></Category>
        })}
        <AddCategoryContainer update={this.addNew}></AddCategoryContainer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("state in categories map state to props", state);
  return {
    categories: state.areas.selected ? state.categories[state.areas.selected.name] : []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(actionCreators.fetchCategories());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
