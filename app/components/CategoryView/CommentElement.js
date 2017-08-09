import React from 'react';
import { Link } from 'react-router';
import AddCommentContainer from './AddCommentContainer.js';
import CommentContainer from './CommentContainer.js';

const CommentElement = ({
  id,
  title,
  description,
  depth,
  area,
  category,
  comments,
  author,
  showReply,
  replyVisible,
  user,
  deleteComment,
  time,
  score,
  voteUp,
  voteDown,
  sortby
}) => {
  const style = {
  //  background: depth%2 === 0 ? "#CCCCCC" : "#F4F4F4",
    "margin-left": "10px",
    "margin-right": "5px",
   // "margin-top": "5px",
    "margin-bottom": "3px",
    flex: "0 1 auto"
  }

  const headerStyle = {
    background: "#888888"
  }
  const pointer = {
    cursor:'pointer'
  }
  var reply;
  if(replyVisible){
    reply = (
    <div>
      <div className="row">
      </div>
      <div className="row">
        <div className="col">
          <AddCommentContainer parentId={id} id={id} area={area} category={category}></AddCommentContainer>
        </div>
      </div>
    </div>)
  } else {
    reply = <div className="col-2" onClick={showReply}> Reply </div>
  }

  var sortFunction;
  if(sortby === "score"){
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
    <div className="col" style={style}>

    <div className={`card card-${depth%2 === 0 ? 'normal' : 'secondary'}`}>
      <div className="card-header">
        <div className="row">
          <div className="col">
            <h4 className="">{title}</h4>
          </div>
          <div className="col">
              <span className="float-right"> {author} {new Date(time).toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div className="row card-block">
        <div className="col col-2">
          <div className="row" onClick={voteUp}>
            <div className="col" style={pointer}>
              Up
            </div>
          </div>
          <div className="row">
            <div className="col">
              {score?score:0}
            </div>
          </div>
          <div className="row" onClick={voteDown}>
            <div className="col" style={pointer}>
              Down
            </div>
          </div>
        </div>
        <div className="col col-10">
          {description.split('\n').map(text => {
              return <p> {text} </p>
          })}
        </div>
      </div>

      <div className="card-footer">
        <div className="row">
          <div className="card-link col" style={pointer} onClick={showReply}> { replyVisible ? "Cancel" : "Reply" } </div>
          { (user.nickname === author) &&
            <div className="card-link col" style={pointer} onClick={deleteComment}>
              <span className="float-right">
               Delete comment
              </span>
             </div>
          }
        </div>
        {replyVisible &&
            <div className="">
              <div className="">
                <AddCommentContainer parentId={id} submitText={"Reply"} id={id} area={area} category={category}></AddCommentContainer>
              </div>
            </div>
        }
        { comments && comments.filter(comment => comment && comment.parentId && (comment.parentId === id)).sort(sortFunction).map((comment) => {
          return <CommentContainer
              key={comment.id}
              id={comment.id}
              title={comment.title}
              description={comment.description}
              depth={depth+1}
              area={area}
              category={category}
              author={comment.user}
              time={comment.time}
              score={comment.score}
              comments={comments}
              replyVisible={comment.replyVisible}
              >
            </CommentContainer>
        })}
      </div>

    </div>
    </div>
    </div>
  )
}

export default CommentElement;
