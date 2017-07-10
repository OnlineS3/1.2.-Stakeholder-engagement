import React from 'react';
import { Link } from 'react-router';

class AreaButton extends React.Component{
  render{
    function clicked(){
      console.log(this.props.menu_id)
      this.props.handleClick(this.props.menu_id);
    }
    return (
      <DropdownMenuItem onClick={clicked}>
        {this.props.area}
      </DropdownMenuItem>
    )
  }
}

function mapStateToProps(state) {
    return {
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (menu_id) => {
      console.log("clicked", menu_id)
      dispatch(actionCreators.toggleMenu(menu_id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);
