import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest}>
        {options.map(o => {
          return (
            <option key={o.value} value={o.value}>
              {o.key} 
            </option>
          )
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </p>
  )
}

export default Select