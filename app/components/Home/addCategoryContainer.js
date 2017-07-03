import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import AddCategory from './AddCategory.js'

class AddCategoryContainer extends React.Component {
  constructor(props){
    super(props);
    this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
    this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this);
    this.state = {title:"", description:""};
  }

  handleTitleUpdate(e){
    this.setState({title: e.target.value});
  }
  handleDescriptionUpdate(e){
    this.setState({description: e.target.value});
  }

  render() {
    return (
      <AddCategory handleTitleUpdate={this.handleTitleUpdate} handleDescriptionUpdate={this.handleDescriptionUpdate}></AddCategory>
    )
  }
}

function mapStateToProps(state) {
    return {
      "title": state.title,
      "description": state.description 
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    addNew: () => {
      console.log("clidked")
      dispatch(actionCreators.addCategory(this.state.title, this.state.description));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
