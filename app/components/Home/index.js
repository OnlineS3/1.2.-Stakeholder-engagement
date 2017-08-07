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
    if(this.props.logged_in){
      return(
        <div>
          <Categories params={this.props.params}/>
        </div>
      )
    } else {
      return(
        <div>
          Please begin by logging in.
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
