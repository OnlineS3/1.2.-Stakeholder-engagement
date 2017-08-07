import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from 'app/actions/actionCreators';

class DropdownMenu extends React.Component {
  toggle(e){
    e.preventDefault();
    this.props.handleClick(this.props.menu_id);
  }

  constructor(props){
    super(props);
    this.props.handleClick.bind(this);
  }

  render() {
    function toggle(){
      this.props.handleClick(this.props.menu_id);
    }
    toggle = toggle.bind(this);
    const style = {
      background: "grey",
      float: this.props.justify?this.props.justify:"right",
      height: "100%",
      width: "100%",
    }
    const styleOpen = {
      background: "grey",
      marginTop: "40px"
    }
    const absolute = {
      //position: "absolute",
      "zIndex": 100
    }
    if(this.props.open(this.props.menu_id)){
      return (
        <div className="row">
          <div style={absolute} className="col">
            <div className="row" onClick={toggle}>
              <div className="col btn btn-primary navbar-btn">
                {this.props.title}
              </div>
            </div>
            {this.props.children}
          </div>
        </div>
      )
    } else {
      return (
        <div className="col btn btn-primary navbar-btn" onClick={toggle}>
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
      dispatch(actionCreators.toggleMenu(menu_id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);
