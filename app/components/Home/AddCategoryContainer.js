import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import AddCategory from './AddCategory.js'

class AddCategoryContainer extends React.Component {
  render() {
    var onSubmit = (values) => {
      this.props.onSubmit(values, this.props.params.areaName);
    }
    onSubmit = onSubmit.bind();
    return (
      <AddCategory onSubmit={onSubmit}></AddCategory>
    )
  }
}

function mapStateToProps(state) {
    return {
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values, areaName) => {
      dispatch(actionCreators.addCategory(values.title, values.description, areaName));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryContainer);
