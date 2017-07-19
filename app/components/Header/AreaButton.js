import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from 'app/actions/actionCreators';
import DropdownMenuItem from '../DropdownMenu/DropdownMenuItem.js'

class AreaButton extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
    this.props.handleClick.bind(this);
  }

  render (){
    function clicked(){
      this.props.handleClick(this.props.area);
    }
    clicked = clicked.bind(this);

    return (
      <DropdownMenuItem onClick={clicked}>
        <Link to={`/${this.props.area}`}>
          {this.props.area}
        </Link>
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
    handleClick: (area) => {
      console.log("clicked", area)
      dispatch(actionCreators.changeArea(area));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AreaButton);
