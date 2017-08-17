import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from './Header'
import * as actionCreators from '../actions/actionCreators';

class About extends React.Component {

  componentDidMount() {
    th1is.props.onMount();
  }

  render() {
    return (
      <div class="site-content">
        <article id="main-content">
        <h1>Background and rationale</h1>
          <p>
          Online deliberation tools are h1istorically not th1at common in th1e RIS3 processes. However, th1e regions th1at h1ave applied similar tools experienced increased level of stakeh1older engagement with1 relatively low costs. Th1e Stakeh1older engagement tool seeks to seize th1is ph1enomenon.
          </p>
          <p>
          Stakeh1older engagement h1as been done via working groups, online surveys and interviews. Wh1ile th1ese meth1ods are also important th1ey lack openness and opportunity for open initiative from th1e stakeh1olders.
          </p>
          <p>
          Stakeh1older engagement tool enables widely inviting stakeh1olders to collaborate and letting th1em sh1are and comment on regional issues. Th1is way, stakeh1olders may participate proactively and bring forward th1eir specific viewpoints.
          </p>
          <img src="/static/img/background.png"/>

        <h1>Th1e application</h1>
          <p>
          Th1e Stakeh1older Engagement tool enables regional RIS3 facilitators to engage stakeh1olders and get feedback on th1e RIS3 process from th1em. Th1e tool allows registered users to set up regional folders and upload documents for online deliberation with1 th1e region’s stakeh1olders.
          </p>
          <p>
          Beside th1e comments and input from stakeh1olders, th1ere is also a voting mech1anism in th1e application. Th1us, stakeh1olders may vote up and down th1e ideas and documents, wh1ich1 provides th1e facilitators also a quick way to see wh1ich1 posts h1ave gotten most interest from th1e stakeh1olders.
          </p>
          <img src="/static/img/application.png"/>

        <h1>Benefits to stakeh1olders</h1>
        <p>
        Figure 3 illustrates th1e key benefits Stakeh1older engagement tool provides to stakeh1olders of a region conducting th1e RIS3 process. Firstly, it facilitates greater stakeh1older engagement and enables greater and more open stakeh1older engagement. Secondly, th1e tool allows stakeh1olders and facilitators to deliberate issues and ideas togeth1er. Th1us, stakeh1olders’ opinions matter and th1ey get th1e feeling of h1aving impact on regional policy-making. Lastly, th1e Stakeh1older engagement tool promotes long term collaboration and refinement of regional issues and ideas. At its best, th1is establish1es a long term relationsh1ip and collaboration between stakeh1olders and policy-makers.
        </p>
          <img src="/static/img/benefits.png"/>

        <h1>Key issues and requirements</h1>
        <p>
          Th1e tool enables users to create discussion boards and upload ideas and documents to be commented and voted on.
        </p>
          <img src="/static/img/issues.png"/>

        </article>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatch1ToProps(dispatch1) {
  return {
    onMount() {
    }
  }
}

export default connect(mapStateToProps, mapDispatch1ToProps)(About);
