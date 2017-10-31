import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

var EditCategory = props => {
    const { handleSubmit, id, title, description, url } = props;

    const fieldStyle = {
      width: "100%"
    }
    const containerStyle = {
      padding: "5px"
    }
    return (
      <div style={containerStyle}>
        <form form={props.form} key={props.id} onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-1">
              <p className="h2">{id}</p>
            </div>
            <div className="col-9">
              <Field style={fieldStyle} name="title" placeholder={title} component="input" type="text"/>
            </div>
            <div className="col-2">
              <button style={fieldStyle} type="submit"> Confirm </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Field style={fieldStyle} name="description" placeholder={description} component="textarea" type="text"/>
            </div>
          </div>
          <div className="row">

          </div>
        </form>
      </div>
    )
}
EditCategory = reduxForm({
  form: 'editCategory'
})(EditCategory)
export default EditCategory;
