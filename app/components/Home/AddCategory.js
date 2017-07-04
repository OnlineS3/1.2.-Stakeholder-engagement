import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

var AddCategory = props => {
    console.log(props)
    const { handleSubmit } = props;
    console.log(handleSubmit)

    return (
      <form onSubmit={handleSubmit}>
        <Field name="title" component="input" type="text"/>
        <Field name="description" component="input" type="text"/>
        <button type="submit"> Add </button>
      </form>
    )
}
AddCategory = reduxForm({
  form: 'addCategory'
})(AddCategory)
export default AddCategory;
