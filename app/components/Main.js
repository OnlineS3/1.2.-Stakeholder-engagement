import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from './Header'
import * as actionCreators from '../actions/actionCreators';

class Main extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <Header user={this.props.user} params={this.props.params}/>

        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(actionCreators.getUser());
      dispatch(actionCreators.fetchCategories());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
