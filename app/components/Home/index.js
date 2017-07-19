import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../store';

import * as actionCreators from '../../actions/actionCreators';
import HomeView from './HomeView';
import ServerView from './ServerView';
import Categories from './Categories';
import Header from '../Header';


class Home extends React.Component {
  render() {
    console.log("homeprops:", this.props);
    if(this.props.logged_in){
      return(
        <div>
          <Header user={this.props.user} params={this.props.params}/>

          <HomeView props={{message: "Hello!"}}/>
          <ServerView props={{}}/>
          <Categories params={this.props.params}/>
        </div>
      )
    } else {
      return(
        <div>
          <HomeView props={{message: "Hello!"}}/>
        </div>
      )
    }
  }

}

function mapStateToProps(state) {
  return {
  	logged_in: state.user.logged_in
  }
}


function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
