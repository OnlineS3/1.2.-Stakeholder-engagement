import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import DropdownMenu from '../DropdownMenu'
import DropdownMenuItem from '../DropdownMenu/DropdownMenuItem.js'

var LoginMenu = props => {
    var id = "usermenu"
    const style = {
      background: "grey",
      width: "100%",
      height: "100%"
    }

    return (
      <div style={{}}>
        <DropdownMenu menu_id={id} title={props.user.username}>
          <DropdownMenuItem>
            <a href="/logout"> Logout </a>
          </DropdownMenuItem>
        </DropdownMenu>
      </div>
    )
}

export default LoginMenu;
