import React from 'react';
import { Link } from 'react-router';

var DropdownMenuItem = props => {
  /*
    const style = {
      background: "grey",
      fontFamily: "sans",
      height: "100%",
    }
    */
    const style = {
      "z-index": 100,
      background: "grey",
    }

    return (
      <div style={style} className="row" onClick={props.onClick}>
        <div className="col">
          {props.children}
        </div>
      </div>
    )
}
export default DropdownMenuItem;
