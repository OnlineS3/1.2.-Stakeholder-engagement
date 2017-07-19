import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CommentElement from './CommentElement.js';
import AddCommentContainer from './AddCommentContainer.js';
import * as actionCreators from '../../actions/actionCreators';


class CategoryView extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onMount(this.props.params.category);
  }

  render(){
    console.log(this.props)
      return (
      <div>
        <h2>{this.props.id} {this.props.title}</h2>
        { this.props.comments && this.props.comments.map((comment) => {
          return <CommentElement
              key={comment.id}
              id={comment.id}
              title={comment.title}
              description={comment.description}>
            </CommentElement>
        })}
          <AddCommentContainer update={this.addNew}></AddCommentContainer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    comments: state.areas.selected ? state.categories[state.areas.selected.name] : []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount(category) {
      dispatch(actionCreators.fetchComments(category));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);
