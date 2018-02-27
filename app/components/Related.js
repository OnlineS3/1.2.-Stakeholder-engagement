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

        <aside id='sidebar'>
            <div className="button alt"> <a href="http://www.s3platform.eu/wp-content/uploads/2017/06/Guideline_Tool_RIS3_Debate_at_a_glance.pdf" > Download Guide  <i class="fa fa-file-pdf-o" aria-hidden="true"></i> </a></div>
            <div className="button">  <a href="/application"> Access to application  <img src="img/access-icon.png" width="20"/> </a></div>
        </aside>
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
