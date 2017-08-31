import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from './Header'
import * as actionCreators from '../actions/actionCreators';

class Related extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div className="site-content">
        <article id="main-content">
        <h1>Related documents will be added later</h1>
        </article>
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

export default connect(mapStateToProps, mapDispatchToProps)(Related);
