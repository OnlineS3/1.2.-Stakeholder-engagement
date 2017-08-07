import React from 'react';
import { Link } from 'react-router';

var HeaderButton = props => {
    const { logged_in } = props;
    const style = {
      background: "#FAFAFA",
      float: "right",
      height: "100%",
    }

    return (
      <div className="col btn btn-primary navbar-btn" style={style}>
          {props.children}
      </div>
    )
}
export default HeaderButton;
