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
  }

  render() {
    return(
      <div>
        <HomeView props={{message: "Hello!"}}/>
        <ServerView props={{}}/>
        <Categories/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
  	exampleStateAttribute: state.exampleStateAttribute
  }
}


function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
