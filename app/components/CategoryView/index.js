import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CommentContainer from './CommentContainer.js';
import AddCommentContainer from './AddCommentContainer.js';
import * as actionCreators from '../../actions/actionCreators';
import SortByButton from './SortByButton.js';


class CategoryView extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onMount(this.props.params.areaName, this.props.params.categoryId);
  }

  render(){
    var id = this.props.params.categoryId;
    var name = this.props.params.areaName;
    var category;
    if(this.props.categories[name])
      category = this.props.categories[name][id - 1];

    var comments;
    if(this.props.comments[this.props.params.areaName])
      comments = this.props.comments[this.props.params.areaName][this.props.params.categoryId];
    else comments = [];

    var sortFunction;
    if(this.props.sortby === "score"){
      sortFunction = (comment1, comment2) => {
        return Number(comment2.score) - Number(comment1.score)
      }
    } else {
      sortFunction = (comment1, comment2) => {
        return new Date(comment2.time).getTime() - new Date(comment1.time).getTime()
      }
    }

      return (
      <div className="row">
          <div className="col-12">
            <h2>{id} {category && category.title}</h2>
            <p> {category && category.description} </p>
          </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <h3> Comments and suggestions related to this area </h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <SortByButton></SortByButton>
            </div>
          </div>
          { this.props.comments && comments.filter(comment => comment && comment.parentId === 0).sort(sortFunction).map((comment) => {
            return <CommentContainer
                key={comment.id}
                id={comment.id}
                title={comment.title}
                description={comment.description}
                depth={0}
                area={name}
                category={id}
                author={comment.user}
                time={comment.time}
                score={comment.score}
                comments={comments}
                replyVisible={comment.replyVisible}
                >
              </CommentContainer>
          })}
          <AddCommentContainer id={0} parentId={0} area={this.props.params.areaName} category={this.props.params.categoryId}></AddCommentContainer>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    comments: state.comments,
    sortby: state.sortby
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
