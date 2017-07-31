import React from 'react';
import { Link } from 'react-router';

var HeaderButton = props => {
    const { logged_in } = props;
    const style = {
      background: "grey",
      float: "right",
      height: "100%",
    }

    return (
      <div className="col-2" style={style}>
        {props.children}
      </div>
    )
}
export default HeaderButton;
