import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from 'app/actions/actionCreators';

class DropdownMenu extends React.Component {
  toggle(e){
    e.preventDefault();
    console.log(this.props.menu_id)
    this.props.handleClick(this.props.menu_id);
  }

  constructor(props){
    super(props);
    console.log(this.props);
    this.props.handleClick.bind(this);
  }

  render() {
    function toggle(){
      console.log(this.props.menu_id)
      this.props.handleClick(this.props.menu_id);
    }
    toggle = toggle.bind(this);
    const style = {
      background: "grey",
      fontFamily: "sans",
      float: "right",
      height: "100%",
    }
    const styleOpen = {
      background: "grey",
      fontFamily: "sans",
      marginTop: "40px",
      height: "100%"
    }
    if(this.props.open(this.props.menu_id)){
      return (
        <div style={style}>
          <div style={style}  onClick={toggle}>
            {this.props.title}
          </div>
          <div style={styleOpen}>
            {this.props.children}
          </div>
        </div>
      )
    } else {
      return (
        <div style={style} onClick={toggle}>
          {this.props.title}
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
    return {
      open(id) {
        return state.menuOpen[id];
      }
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
