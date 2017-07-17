import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import Modal from 'react-modal';
import * as actionCreators from '../actions/actionCreators';
import DropdownMenu from './DropdownMenu.js'
import DropdownMenuItem from './DropdownMenuItem.js'
import AreaButton from './AreaButton.js'
import HeaderButton from './HeaderButton.js'
import AddAreaContainer from './Home/AddAreaContainer.js'
import JoinAreaContainer from './Home/JoinAreaContainer.js'

class AreaMenu extends React.Component{

  componentDidMount(){
    this.props.onMount();
  }

  render() {
    const style = {
      background: "grey",
      fontFamily: "sans",
      float: "right",
      height: "100%",
    }

    var id = "areamenu"
    var areas = this.props.areas.map(area => {
      console.log(area)
      return <AreaButton area={area.name}/>
    })
    var title;
    if (this.props.area) title = this.props.area.name;
    else title = "No categories";

    return (
      <div style={style}>
        <Modal
          isOpen={this.props.addModalOpen}
          onRequestClose={this.props.closeAddModal}
          contentLabel="Create a new area"
        >
          <AddAreaContainer></AddAreaContainer>
        </Modal>
        <Modal
          isOpen={this.props.joinModalOpen}
          onRequestClose={this.props.closeJoinModal}
          contentLabel="Join area"
        >
          <JoinAreaContainer></JoinAreaContainer>
        </Modal>
        {this.props.area && this.props.area.admin &&
          <HeaderButton>
            <Modal
              isOpen={this.props.inviteModalOpen}
              onRequestClose={this.props.closeInviteModal}
              contentLabel="Invite users"
            >
              <p> Share this invitation code with users you want to participate in the area: </p>
              <p> {this.props.area.inviteLink}</p>
              <br/>
              <p> Share this invitation code with admins you want to help manage the area: </p>
              <p> {this.props.area.adminInviteLink}</p>

            </Modal>
            <p onClick={this.props.openInviteModal}> Invite users to area </p>
          </HeaderButton>
        }
        <DropdownMenu menu_id={id} title={title}>
          {areas}
          <DropdownMenuItem onClick={this.props.openAddModal}>

            Create a new area
          </DropdownMenuItem>
          <DropdownMenuItem onClick={this.props.openJoinModal}>

            Join an area
          </DropdownMenuItem>
        </DropdownMenu>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      area: state.areas.selected,
      areas: state.areas,
      inviteModalOpen: state.modals.inviteUsers,
      joinModalOpen: state.modals.joinArea,
      addModalOpen: state.modals.addArea
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    onMount () {
      console.log("mount area")
      dispatch(actionCreators.fetchAreas());
    },
    openJoinModal () {
      dispatch(actionCreators.openModal("joinArea"));
    },
    closeJoinModal () {
      dispatch(actionCreators.closeModal("joinArea"));
    },
    openAddModal () {
      dispatch(actionCreators.openModal("addArea"));
    },
    closeAddModal () {
      dispatch(actionCreators.closeModal("addArea"));
    },
    openInviteModal () {
      dispatch(actionCreators.openModal("inviteUsers"));
    },
    closeInviteModal () {
      dispatch(actionCreators.closeModal("inviteUsers"));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AreaMenu);
