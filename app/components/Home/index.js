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
    const style = {
      "min-height": "36rem"
    }
    if(this.props.logged_in){
      return(
        <div style={style}>
          <Header params={this.props.params}/>

          <Categories params={this.props.params}/>
        </div>
      )
    } else {
      return(
        <div style={style}>
          Please begin by <a href="/login">logging in</a>.
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
