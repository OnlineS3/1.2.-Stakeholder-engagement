import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';


class Category extends React.Component {

  render(){
    function edit(){
      this.props.edit(this.props.id, this.props.area)
    }
    edit = edit.bind(this);
    function del(){
      this.props.delete(this.props.id, this.props.area)
    }
    del = del.bind(this);
    return (
      <div className="row">
        <div className="col-10">
          <Link to={this.props.url}>
            <h2>{this.props.id} {this.props.title}</h2>
          </Link>
          <p> {this.props.description} </p>
        </div>
        <div className="col-1" onClick={edit}>
          <div className="btn">
            Edit
          </div>
        </div>
        <div className="col-1" onClick={del}>
          <div className="btn">
            Delete
          </div>
        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    edit(category, area){
      dispatch(actionCreators.editCategory(category, area));
    },
    delete(category, area){
      dispatch(actionCreators.deleteCategory(category, area));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Category);
