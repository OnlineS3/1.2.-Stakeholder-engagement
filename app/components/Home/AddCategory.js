import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

var AddCategory = props => {
    const { handleSubmit } = props;

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
            <div className="col-10">
              <Field style={fieldStyle} name="title" placeholder="Name of priority area" component="input" type="text"/>
            </div>
            <div className="col-2">
              <button style={fieldStyle} type="submit"> Add Priority </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Field style={fieldStyle} name="description" placeholder="Description" component="textarea" type="text"/>
            </div>
          </div>
          <div className="row">

          </div>
        </form>
      </div>
    )
}
AddCategory = reduxForm({
  form: 'addCategory'
})(AddCategory)
export default AddCategory;
