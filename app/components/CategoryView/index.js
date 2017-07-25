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
    this.props.onMount(this.props.params.areaName, this.props.params.categoryId);
  }

  render(){
    console.log(this.props)
    var id = this.props.params.categoryId;
    var name = this.props.params.areaName;
    var category;
    if(this.props.categories[name])
      category = this.props.categories[name][id - 1];

    var comments;
    if(this.props.comments[this.props.params.areaName])
      comments = this.props.comments[this.props.params.areaName][this.props.params.categoryId];
    else comments = [];
    console.log(this.props, id, name)
      return (
      <div>
        <h2>{id} {category && category.title}</h2>
        <p> {category && category.description} </p>
        { this.props.comments && comments.filter(comment => comment && comment.parentId === 0).map((comment) => {
          return <CommentElement
              key={comment.id}
              id={comment.id}
              title={comment.title}
              description={comment.description}
              depth={0}
              comments={comments}
              area={name}
              category={id}
              >
            </CommentElement>
        })}
          <AddCommentContainer id={0} parentId={0} area={this.props.params.areaName} category={this.props.params.categoryId}></AddCommentContainer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount(areaName, categoryId) {
      dispatch(actionCreators.fetchComments(areaName, categoryId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);
