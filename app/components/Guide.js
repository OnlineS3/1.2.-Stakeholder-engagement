import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from './Header'
import * as actionCreators from '../actions/actionCreators';

class About extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        Guide text here
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
