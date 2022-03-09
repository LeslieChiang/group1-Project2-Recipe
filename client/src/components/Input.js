import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <p>
      <label htmlFor='name'>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </p>
  )
}

export default Input