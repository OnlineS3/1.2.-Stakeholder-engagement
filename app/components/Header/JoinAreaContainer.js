import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import JoinArea from './JoinArea.js'

class JoinAreaContainer extends React.Component {
  render() {
    return (
      <JoinArea></JoinArea>
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
      dispatch(actionCreators.joinArea(values.key));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(JoinArea);
