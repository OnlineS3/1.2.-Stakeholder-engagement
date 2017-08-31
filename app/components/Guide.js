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
        <h1> CREATING A REGION </h1>
        <ol>
          <li> Click the region menu from the upper left corner, and from the menu select “Create a new region". These regions are meant for the use of individual regions or nations. </li>
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
