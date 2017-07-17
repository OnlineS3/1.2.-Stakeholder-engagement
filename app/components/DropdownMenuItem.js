import React from 'react';
import { Link } from 'react-router';

var DropdownMenuItem = props => {
    const style = {
      background: "grey",
      fontFamily: "sans",
      height: "100%",
    }

    return (
      <div style={style} onClick={props.onClick}>
        {props.children}
        <br/>
      </div>
    )
}
export default DropdownMenuItem;
