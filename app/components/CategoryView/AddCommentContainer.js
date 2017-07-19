import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import AddComment from './AddComment.js'

class AddCommentContainer extends React.Component {
  render() {
    return (
      <AddComment></AddComment>
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
      dispatch(actionCreators.addComment(values.title, values.description));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
