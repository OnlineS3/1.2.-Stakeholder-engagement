import React from 'react';
import { Link } from 'react-router';
import UserMenu from './UserMenu.js'
import AreaMenu from './AreaMenu.js'
import LoginButton from './LoginButton.js'

var Header = props => {
    const { user } = props;
    const style = {
      width: '100%',
      background: "blue",
      height: "40px"
    }
    var element;
    if(user.logged_in){
      element = <UserMenu user={user}/>;
    } else {
      element = <LoginButton/>;
    }

    return (
      <div style={style}>
        <AreaMenu/>
        {element}
      </div>
    )
}
export default Header;
