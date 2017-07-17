import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

var AddArea = props => {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit}>
        New area name:
        <Field name="name" component="input" type="text"/>
        <button type="submit"> Add </button>
      </form>
    )
}
AddArea = reduxForm({
  form: 'addArea'
})(AddArea)
export default AddArea;
