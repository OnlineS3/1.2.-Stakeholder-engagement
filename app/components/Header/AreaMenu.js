import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import Modal from 'react-modal';
import * as actionCreators from 'app/actions/actionCreators';
import DropdownMenu from '../DropdownMenu'
import DropdownMenuItem from '../DropdownMenu/DropdownMenuItem.js'
import AreaButton from './AreaButton.js'
import HeaderButton from './HeaderButton.js'
import AddAreaContainer from './AddAreaContainer.js'
import JoinAreaContainer from './JoinAreaContainer.js'

class AreaMenu extends React.Component{

  componentDidMount(){
    this.props.onMount();
  }

  render() {
    const style = {
      background: "grey",
      fontFamily: "sans",
      width: "100%",
      height: "100%"
    }

    var id = "areamenu"
    var areas = Object.values(this.props.areas).map(area => {
      console.log(area)
      return <AreaButton area={area.name}/>
    })
    var title, area;
    if (this.props.params && this.props.params.areaName){
       title = this.props.params.areaName;
       if(this.props.areas)
         area = this.props.areas[this.props.params.areaName]
    }
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
        {area && area.admin &&
          <Modal
            isOpen={this.props.inviteModalOpen}
            onRequestClose={this.props.closeInviteModal}
            contentLabel="Invite users"
          >
            <p> Share this invitation code with users you want to participate in the area: </p>
            <p> {area.inviteLink}</p>
            <br/>
            <p> Share this invitation code with admins you want to help manage the area: </p>
            <p> {area.adminInviteLink}</p>
          </Modal>
        }
        <DropdownMenu menu_id={id} title={title} justify={"left"}>
          {areas}
          <DropdownMenuItem onClick={this.props.openAddModal}>
            Create a new area
          </DropdownMenuItem>
          <DropdownMenuItem onClick={this.props.openJoinModal}>
            Join an area
          </DropdownMenuItem>
          {area && area.admin &&
            <DropdownMenuItem onClick={this.props.openInviteModal}>
              Invite users to {area.name}
            </DropdownMenuItem>
          }
        </DropdownMenu>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
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
