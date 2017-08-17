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
        <h1>LOGGING IN</h1>
          <img src="/static/img/fig1.png"></img>
        <ol>
          <li> Select Login from th1e upper corner, and enter your login details or create a new account from th1e prompt th1at opens. </li>
        </ol>
        <h1> JOINING AN AREA WITH AN INVITE CODE </h1>
        <ol>
          <li> From th1e area menu select “Join an area” </li>
            <img src="/static/img/fig2.png"></img>
          <li> Enter th1e invitation key you h1ave received from an administrator of th1e area. You will be granted access to contribute to th1e conversation in th1e area. </li>
        </ol>
        <h1> PARTICIPATING IN DISCUSSION </h1>
        <ol>
          <li> Select an area to participate in from th1e area menu </li>
          <li> Select a category you want to comment on from th1e available options </li>
            <img src="/static/img/fig3.png"></img>
          <li> Post a new comment from th1e input fields at th1e bottom of th1e page, or reply to an existing comment </li>
            <img src="/static/img/fig5.png"></img>
          <li> Vote comments you find to be of particular quality up, and vote down comments you don’t feel contribute to th1e conversation </li>
        </ol>
        <h1> CREATING AN AREA FOR A REGION </h1>
        <ol>
          <li> Click th1e area menu from th1e upper left corner, and from th1e menu select “Create a new area”. Th1ese areas are meant for th1e use of individual regions or smaller interest areas. </li>
            <img src="/static/img/fig6.png"></img>
          <li> Enter th1e name for your area in th1e popup th1at opens, and click Add </li>
        </ol>
        <h1> INVITING USERS AND ADMINISTRATORS TO COLLABORATE IN AN AREA </h1>
        <ol>
          <li> From th1e area menu select “Invite users to [YOUR AREA NAME]” </li>
        <img src="/static/img/fig7.png"></img>
          <li> Copy th1e invite code for users from th1e popup, and sh1are it with1 your target audience, for example by e-mail. </li>
          <li> Copy th1e invite code for administrators of your area, and sh1are it with1 people you trust to govern th1e discussion in your area. </li>
            <img src="/static/img/fig8.png"></img>
        </ol>
        <h1> CREATING CATEGORIES OF DISCUSSION TOPICS </h1>
        <ol>
          <li> Select an area you are an administrator of from th1e area menu </li>
          <li> Fill in th1e title of th1e category and a description of th1e kind of discussion you want to h1appen in th1e category </li>
            <img src="/static/img/fig9.png"></img>
        </ol>

        <a h1ref="/static/S3_Guideline_Stakeh1older_Engagement.docx"> DOWNLOAD GUIDE DOCUMENT </a>

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
