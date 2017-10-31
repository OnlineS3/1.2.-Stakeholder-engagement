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
      <div className="site-content">
        <article id="main-content">
        <h1>About</h1>
          <p>
          Online deliberation tools are historically not that common in the RIS3 processes. However, the regions that have applied similar tools experienced increased level of stakeholder engagement with relatively low costs. The Stakeholder engagement tool seeks to seize this phenomenon.
          </p>
          <p>
          Stakeholder engagement has been done via working groups, online surveys and interviews. While these methods are also important they lack openness and opportunity for open initiative from the stakeholders.
          </p>
          <p>
          Stakeholder engagement tool enables inviting stakeholders to collaborate and letting them share and comment on regional issues. This way, stakeholders may participate proactively and bring forward their specific viewpoints.
          </p>

          <p>
          The Stakeholder Engagement tool enables regional RIS3 facilitators to engage stakeholders and get feedback on the RIS3 process from them. The tool allows registered users to set up regional platforms and set up discussion areas related to the RIS priorities of the region, for online deliberation with the region’s stakeholders.
          </p>
          <p>
          Beside the comments and input from stakeholders, there is also a voting mechanism in the application. Thus, stakeholders may vote up and down the ideas and suggestions, which provides the facilitators a quick way to see which posts have gotten most interest from the stakeholders.
          </p>
          <p>
          Within each region, any number of different priorities can be created to guide the discussion into issues concerning each individual priority of the area.
          Each region can have any number of stakeholders and administrators.
          </p>
          <img src="/static/img/application_background.png"/>

        <h1>Benefits to stakeholders</h1>
        <p>
         Firstly, the application facilitates greater stakeholder engagement and enables a more open stakeholder engagement process. Secondly, the tool allows stakeholders and facilitators to deliberate issues and ideas together. Thus, stakeholders’ opinions matter and they get the feeling of having impact on regional policy-making. Lastly, the Stakeholder engagement tool promotes long term collaboration and refinement of regional issues and ideas. At its best, this establishes a long term relationship and collaboration between stakeholders and policy-makers.
        </p>

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
