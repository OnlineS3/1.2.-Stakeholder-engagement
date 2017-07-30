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
  voteUp,
  voteDown
}) => {
  const style = {
    background: depth%2 === 0 ? "#CCCCCC" : "#F4F4F4",
    "margin-left": "10px",
    "margin-right": "5px",
    "margin-top": "5px",
    "margin-bottom": "3px",
    flex: "0 1 auto"
  }

  const headerStyle = {
    background: "#888888"
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

  return (
    <div className="row">

    <div style={style} className="col-12">
      <div style={headerStyle} className="row">
        <div className="col col-4">{title}</div>
        <div className="col col-4">
          <span className="pull-right">{new Date(time).toLocaleString()}</span>
        </div>
        <div className="col col-4">
          <span className="pull-right"> {author} </span>
        </div>
      </div>
      <div className="row">
        <div className="col col-2">
          <div className="row" onClick={voteUp}>
            <div className="col">
              Up
            </div>
          </div>
          <div className="row" onClick={voteDown}>
            <div className="col">
              Down
            </div>
          </div>
        </div>
        <div className="col col-10">
          <p> {description} </p>
        </div>
      </div>
      { comments && comments.filter(comment => comment && comment.parentId && (comment.parentId === id)).map((comment) => {
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
            comments={comments}
            replyVisible={comment.replyVisible}
            >
          </CommentContainer>
      })}
      <div style={headerStyle} className="row">
        <div className="col-2" onClick={showReply}> { replyVisible ? "Cancel" : "Reply" } </div>
        { (user.nickname === author) &&
          <div className="col-2 push-8" onClick={deleteComment}> Delete comment </div>
        }
      </div>
      {replyVisible &&
        <div>
          <div className="row">
            <div className="col">
              <AddCommentContainer parentId={id} id={id} area={area} category={category}></AddCommentContainer>
            </div>
          </div>
        </div>
      }
    </div>
    </div>
  )
}

export default CommentElement;
