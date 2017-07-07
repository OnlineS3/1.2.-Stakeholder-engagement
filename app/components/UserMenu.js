import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import DropdownMenu from './Dropdownmenu.js'

var LoginMenu = props => {
    var id = "usermenu"
    return (
      <DropdownMenu menu_id={id} title={props.user.username}>
        <a href="/logout"> Logout </a>
      </DropdownMenu>
    )
}

export default LoginMenu;
