import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import CommentElement from './CommentElement.js'

class CommentContainer extends React.Component {
  render() {
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
      ></CommentElement>
    )
  }
}

function mapStateToProps(state) {
    return {

    }
  }

function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
