import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';

function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </p>
  )
}

export default Textarea