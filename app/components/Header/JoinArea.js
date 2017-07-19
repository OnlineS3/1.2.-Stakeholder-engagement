import React from 'react';
import { Link } from 'react-router';
import { connect, dispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

var joinArea = props => {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit}>
        Invitation key:
        <Field name="key" component="input" type="text"/>
        <button type="submit"> Join </button>
      </form>
    )
}
joinArea = reduxForm({
  form: 'joinArea'
})(joinArea)
export default joinArea;
