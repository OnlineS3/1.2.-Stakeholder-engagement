import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import EditCategoryElement from './EditCategoryElement.js'

class EditCategoryContainer extends React.Component {
  render() {
    var onSubmit = (values) => {
      this.props.onSubmit(values, this.props.area, this.props.id);
    }
    onSubmit = onSubmit.bind();
    console.log(onSubmit)

    return (
      <EditCategoryElement
        onSubmit={onSubmit}
        area={this.props.area}
        id={this.props.id}
        title={this.props.title}
        description={this.props.description}
        url={this.props.url}
      ></EditCategoryElement>
    )
  }
}

function mapStateToProps(state) {
    return {
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values, areaName, category) => {
      dispatch(actionCreators.editCategorySubmit(values.title, values.description, areaName, category));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryContainer);
