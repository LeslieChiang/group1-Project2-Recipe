import { Field, ErrorMessage } from 'formik';
import React from 'react'
import TextError from './TextError';

function RadioButton(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {
          ({field}) => {
            console.log('field', field);
            return options.map(o => {
              return (
                <span key={o.key}>
                  <input 
                    type='radio'
                    id={o.value}
                    {...field}
                    {...rest}
                    value={o.value}
                    checked={field.value === o.value}                  
                  />
                  <label htmlFor={o.value}>
                    {o.key}
                  </label> 
                </span>
              )
            })
          }    
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default RadioButton