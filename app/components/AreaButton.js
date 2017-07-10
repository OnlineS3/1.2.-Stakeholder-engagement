import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import DropdownMenuItem from './DropdownmenuItem.js'

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
    handleClick: (area) => {
      console.log("clicked", area)
      dispatch(actionCreators.changeArea(area));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AreaButton);
