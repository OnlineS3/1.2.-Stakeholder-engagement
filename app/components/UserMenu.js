import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import DropdownMenu from './DropdownMenu.js'
import DropdownMenuItem from './DropdownMenuItem.js'

var LoginMenu = props => {
    var id = "usermenu"
    return (
      <DropdownMenu menu_id={id} title={props.user.username}>
        <DropdownMenuItem>
          <a href="/logout"> Logout </a>
        </DropdownMenuItem>
      </DropdownMenu>
    )
}

export default LoginMenu;
