import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import AddArea from './AddArea.js'

class AddAreaContainer extends React.Component {
  render() {
    return (
      <AddArea></AddArea>
    )
  }
}

function mapStateToProps(state) {
    return {
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => {
      console.log("clidked")
      dispatch(actionCreators.addArea(values.name));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddArea);
