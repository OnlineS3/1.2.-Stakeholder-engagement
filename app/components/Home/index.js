import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../store';

import * as actionCreators from '../../actions/actionCreators';
import HomeView from './HomeView';
import ServerView from './ServerView';
import Categories from './Categories';


class Home extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    console.log("homeprops:", this.props);
    if(this.props.logged_in){
      return(
        <div>
          <HomeView props={{message: "Hello!"}}/>
          <ServerView props={{}}/>
          <Categories/>
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
  	logged_in: state.logged_in
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(actionCreators.testLogin());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
