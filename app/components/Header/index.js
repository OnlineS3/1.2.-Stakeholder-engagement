import React from 'react';
import { Link } from 'react-router';
import UserMenu from './UserMenu.js'
import AreaMenu from './AreaMenu.js'
import HeaderButton from './HeaderButton.js'

var Header = props => {
    const { user, params } = props;
    const style = {
      width: '100%',
      background: "#004494",
      height: "40px"
    }


    return (
      <div className="row" style={style}>
        <div className="col-2">
          <AreaMenu params={params}/>
        </div>

      </div>
    )
}
export default Header;
