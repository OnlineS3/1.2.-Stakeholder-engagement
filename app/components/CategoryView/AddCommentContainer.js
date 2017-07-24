import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import AddComment from './AddComment.js'

class AddCommentContainer extends React.Component {
  submit(values) {
    this.props.submitForm(values, this.props.params.areaName, this.props.params.categoryId)
  }
  render() {
    return (
      <AddComment handleSubmit={submit}></AddComment>
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
    onSubmit: (values, area, category) => {
      console.log("clidked")
      dispatch(actionCreators.addComment(values.title, values.description, area, category));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
