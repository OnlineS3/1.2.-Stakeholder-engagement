import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class LoginMenu extends React.Component {
  constructor(props){
    super(props);
    this.props.onClick.bind(this);
  }
  render() {
    const style = {
      background: "grey",
      fontFamily: "sans",
      float: "right",
      height: "100%",
    }
    const styleOpen = {
      background: "grey",
      fontFamily: "sans",
      marginTop: "40px",
      height: "100%"
    }
    if(this.props.open){
      return (
        <div style={style}>
          <div style={style} onClick={this.props.onClick}>
            {this.props.user.username}
          </div>
          <div style={styleOpen}>
            <a href="/logout"> Logout </a>
          </div>
        </div>
      )
    } else {
      return (
        <div style={style} onClick={this.props.onClick}>
          {this.props.user.username}
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
    return {
      "open": state.menuOpen,
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      console.log("clicked")
      dispatch(actionCreators.toggleUserMenu());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginMenu);
