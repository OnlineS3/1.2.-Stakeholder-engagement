import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import DropdownMenu from '../DropdownMenu'
import DropdownMenuItem from '../DropdownMenu/DropdownMenuItem.js'
import Dropdown from 'react-dropdown'

class SortByButton extends React.Component {
  render() {
    const options = [
      { value: 'time', label: 'Sort by time added' },
      { value: 'score', label: 'Sort by score' },
    ];
    const defaultOption = options[0];
    return (
      <div className="btn btn-secondary">
      <Dropdown options={options} onChange={this.props.select} value={defaultOption} placeholder="Sort by time added" />
    </div>
    /*<DropdownMenu menu_id={"sortbymenu"} title={`Sort by ${this.props.sortby}`}>
      <DropdownMenuItem onClick={this.props.time}>
        Sort by time added
      </DropdownMenuItem>
      <DropdownMenuItem onClick={this.props.score}>
        Sort by score
      </DropdownMenuItem>
    </DropdownMenu>
    */
    )
  }
}

function mapStateToProps(state) {
    return {
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    select(type){
      dispatch(actionCreators.sortBy(type.value));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SortByButton);
