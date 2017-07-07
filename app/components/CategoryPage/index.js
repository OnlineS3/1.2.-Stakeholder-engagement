import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../store';

import * as actionCreators from '../../actions/actionCreators';

class Home extends React.Component {

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <CategoryContainer/>
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
