import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actionCreators from '../actions/actionCreators';

class Main extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Hello world!</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("state in map state to props", state);
  return {
    logged_in: state.user.logged_in
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(actionCreators.getUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
