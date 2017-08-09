import React from 'react';
import { Link } from 'react-router';

var LoginButton = props => {
    const { logged_in } = props;
    const style = {
      background: "grey",
      float: "right",
      height: "100%",
    }

    return (
      <div style={{}}>
        <a href="/login"> Login </a>
      </div>
    )
}
export default LoginButton;
