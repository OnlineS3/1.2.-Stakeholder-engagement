import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';

class AddCategory extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <input id="title" type="text" value={this.props.title} onChange={this.props.handleTitleUpdate}></input>
        <input id="description" type="text" value={this.props.description} onChange={this.props.handleDescriptionUpdate}></input>
        <button onClick={this.props.addNew}> Add </button>
      </div>
    )
  }
}
export default AddCategory;
