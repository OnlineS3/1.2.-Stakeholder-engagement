import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import AddCategory from './AddCategory.js'

class AddCategoryContainer extends React.Component {
  render() {
    return (
      <AddCategory></AddCategory>
    )
  }
}

function mapStateToProps(state) {
    return {
      selectedArea: state.areas.selected
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => {
      console.log("clidked")
      dispatch(actionCreators.addCategory(values.title, values.description));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
