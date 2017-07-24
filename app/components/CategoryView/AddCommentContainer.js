import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import AddComment from './AddComment.js'

class AddCommentContainer extends React.Component {

  render() {
    var submit = function(values) {
      console.log("submit")
      this.props.submitForm(values, this.props.params.areaName, this.props.params.categoryId)
    }
    submit = submit.bind(this);
    console.log("create addcommentcontainer")
    return (
      <AddComment onSubmit={submit}></AddComment>
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
    submitForm: (values, area, category) => {
      console.log("clidked")
      dispatch(actionCreators.addComment(area, category, values.title, values.description));
    }/*,
    onSubmit: (values) => {
      console.log("wrong one")
    }*/
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCommentContainer);
