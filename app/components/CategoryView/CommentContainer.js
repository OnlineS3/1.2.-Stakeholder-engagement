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
    function deleteComment() {
      this.props.deleteComment(this.props.area, this.props.category, this.props.id);
    }
    deleteComment = deleteComment.bind(this);
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
        author={this.props.author}
        replyVisible={this.props.replyVisible}
        showReply={showReply}
        user={this.props.user}
        deleteComment={deleteComment}
      ></CommentElement>
    )
  }
}

function mapStateToProps(state) {
    return {
      "replyOpen": state.comments,
      "user": state.user
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    toggleReplybox(area, category, id) {
      dispatch(actionCreators.toggleReplybox(area, category, id));
    },
    deleteComment(area, category, id) {
      dispatch(actionCreators.deleteComment(area, category, id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
