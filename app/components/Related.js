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
    var style = {color: "#8300e9"};
    return (
      <div className="site-content">
        <article id="main-content">
        <h1>Related documents</h1>
        <p>Selected use cases using the Debate at a glance tool of the Online-S3 platform:</p>
        <p className=""><strong><span style={style}>Will be uploaded soon</span></strong></p>
        <p>Selected RIS3 strategies including Debate at a glance method in their implementation process:</p>
        <p className=""><strong><span style={style}>Will be uploaded soon</span></strong></p>
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
