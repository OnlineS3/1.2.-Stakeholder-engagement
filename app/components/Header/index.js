import React from 'react';
import { Link } from 'react-router';
import UserMenu from './UserMenu.js'
import AreaMenu from './AreaMenu.js'
import HeaderButton from './HeaderButton.js'

var Header = props => {
    const { user, params } = props;
    const style = {
      width: '100%',
      background: "blue",
      height: "40px"
    }
    var element;
    if(user.logged_in){
      element = <UserMenu user={user}/>;
    } else {
      element = <HeaderButton>
                  <a href="/login"> Login </a>
                </HeaderButton>;
    }

    return (
      <div className="row" style={style}>
        <div className="col-2">
          <AreaMenu params={params}/>
        </div>

        <HeaderButton>
          <Link to="/about">
            About
          </Link>
        </HeaderButton>
        <HeaderButton>
          <Link to="/guide">
            Guide
          </Link>
        </HeaderButton>
        <HeaderButton>
          <Link to="/">
            Access to application
          </Link>
        </HeaderButton>
        <div className="col-2 push-2">
          {element}
        </div>
      </div>
    )
}
export default Header;
