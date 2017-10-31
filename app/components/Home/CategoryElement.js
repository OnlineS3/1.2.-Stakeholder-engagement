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
    return (
      <div className="row">
        <div className="col-10">
          <Link to={this.props.url}>
            <h2>{this.props.id} {this.props.title}</h2>
          </Link>
          <p> {this.props.description} </p>
        </div>
        <div className="col-2" onClick={edit}>
          <div className="btn">
            Edit
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
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Category);
