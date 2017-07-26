import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import CommentElement from './CommentElement.js'

class CommentContainer extends React.Component {

  render() {
    function showReply() {
      this.props.toggleReplybox(this.props.area, this.props.category, this.props.id);
    }
    showReply = showReply.bind(this);
    return (
      <CommentElement
        key={this.props.id}
        id={this.props.id}
        title={this.props.title}
        description={this.props.description}
        depth={this.props.depth}
        comments={this.props.comments}
        area={this.props.area}
        category={this.props.category}
        user={this.props.user}
        replyVisible={this.props.replyVisible}
        showReply={showReply}
      ></CommentElement>
    )
  }
}

function mapStateToProps(state) {
    return {
      "replyOpen": state.comments
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    toggleReplybox(area, category, id) {
      dispatch(actionCreators.toggleReplybox(area, category, id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
