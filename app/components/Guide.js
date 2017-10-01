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
    const imgStyle = {
      maxWidth: "700px",
      border: "1px darkgrey"
    };
    return (
      <div className="site-content">
        <article id="main-content">
        <h1>OVERVIEW</h1>
        <p>
          This application is meant for discussion about the priorities of a RIS3 facilitating governal nation or region. In the application, the facilitator of the RIS3 process creates their own workspace that will be visible only for the stakeholders they invite to collaborate. This workspace is referred in the application as a "region", matching to the geographical area responsible for the RIS3 process.
        </p>
        <p>
          Inside each of these regions, the facilitators of that region, referred to as "administrators" in the application, define smaller priorities for which they want discussion to be centered on. These priorities should match the RIS3 specialisation focuses, defined in a smart specialisation strategy for the region. If no previous smart specialisation strategy exists, the priorities can set up as more open ended, or based on a previous local strategy.
        </p>

        <h1> FOR USERS </h1>
        <p> The following directions are for stakeholders of the area that are invited to participate in the discussion of the region by the region's administrators. This invite should be received by email, and include an invitation code for joining the region. </p>
          <h1>LOGGING IN</h1>
            <img style={imgStyle} src="/static/img/fig1.png"></img>
          <ol>
            <li> Select Login from the upper corner, and enter your login details or create a new account from the prompt that opens. </li>
          </ol>

          <h1> JOINING A REGION WITH AN INVITE CODE </h1>
          <ol>
            <li> From the region menu select “Join a region" </li>
              <img style={imgStyle} src="/static/img/fig2.png"></img>
            <li> Enter the invitation key you have received from an administrator of the region. You will be granted access to contribute to the conversation in the region. </li>
          </ol>
          <h1> PARTICIPATING IN DISCUSSION </h1>
          <ol>
            <li> Select a region to participate in from the region menu </li>
            <li> Select a priority you want to comment on from the available options </li>
              <img style={imgStyle} src="/static/img/fig3.png"></img>
            <li> Post a new comment from the input fields at the bottom of the page, or reply to an existing comment </li>
              <img style={imgStyle} src="/static/img/fig5.png"></img>
            <li> Vote comments you find to be of particular quality up, and vote down comments you don’t feel contribute to the conversation </li>
          </ol>

        <h1> FOR ADMINISTRATORS </h1>
        <p> The following instructions are for administrators of a region, to help them manage the discussion related to the priorities related to their RIS3 strategies.</p>

        <h1> CREATING A REGION </h1>
        <ol>
          <li> Click the region menu from the upper left corner, and from the menu select “Create a new region". These regions are meant for the use of individual regions or nations, on the level the RIS3 strategy is formed. </li>
            <img style={imgStyle} src="/static/img/fig6.png"></img>
          <li> Enter the name for your region in the popup that opens, and click Add </li>
        </ol>
        <h1> INVITING USERS AND ADMINISTRATORS TO COLLABORATE IN A REGION </h1>
        <ol>
          <li> From the region menu select “Invite users to [YOUR REGION NAME]” </li>
        <img style={imgStyle} src="/static/img/fig7.png"></img>
          <li> Copy the invite code for users from the popup, and share it with your target audience, for example by e-mail. </li>
          <li> Copy the invite code for administrators of your region, and share it with people you trust to govern the discussion in your region. </li>
            <img style={imgStyle} src="/static/img/fig8.png"></img>
        </ol>
        <h1> CREATING PRIORITIES FOR DISCUSSION </h1>
        <ol>
          <li> Select a region you are an administrator of from the region menu </li>
          <li> Fill in the title of the priority and a description of the kind of discussion you want to happen related to the priority in question </li>
            <img style={imgStyle} src="/static/img/fig9.png"></img>
        </ol>

        <a href="/static/S3_Guideline_Stakeholder_Engagement.docx"> DOWNLOAD GUIDE DOCUMENT </a>

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

export default connect(mapStateToProps, mapDispatchToProps)(About);
