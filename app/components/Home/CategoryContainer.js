import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import AddCategory from './AddCategory.js'

class AddCategoryContainer extends React.Component {
  render() {
    return (
      <Category id={} title={} description={}/>
    )
  }
}

function mapStateToProps(state) {
    return {

    }
  }

function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
