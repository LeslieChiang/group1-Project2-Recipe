import React, { useState } from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';

const initialValues = {
  name: '',
  ingredientList: [{ quantity: '', name: '' }],
  method: '',
};

const savedValues = {
  name: '',
  ingredientList: [{ quantity: '', name: '' }],
  method: '',
};
// Call APIs here with payload
const onSubmit = (values, onSubmitProps) => {
  console.log('onSubmit=>values', values);
  onSubmitProps.resetForm();
};
// YUP validation object schema (As an alternative to validate)
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  method: Yup.string().required('Required'),
});

function RecipeForm() {
  const [formValues, setFormValues] = useState(null);
  const dropdownOptions = [
    { key: 'Select ingredient', value: '' },
    { key: 'Beef', value: 'beef' },
    { key: 'Cardomom Pod', value: 'cardomomPod' },
    { key: 'Cinnamon', value: 'cinnamon' },
    { key: 'Coconut Milk', value: 'coconutMilk' },
    { key: 'Dried Chili', value: 'driedChili' },
    { key: 'Garlic', value: 'garlic' },
    { key: 'Ginger', value: 'Ginger' },
    { key: 'Shallots', value: 'shallots' },
    { key: 'Star Aniese', value: 'starAnise' },
  ];

  return (
    <Formik
      // initialValues={formValues || initialValues}
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize // Allow form to change init values
      // validateOnMount
    >
      {(formik) => {
        return (
          <Form>
            <fieldset>
              <legend>Recipe Form</legend>
              <Input label='Name' name='name' />
              <Textarea label='Cooking Method' name='method' />
              <div>
                <label>Ingredient List</label>
                <FieldArray name='ingredientList'>
                  {(props) => {
                    const { push, remove, form } = props;
                    const { values } = form;
                    const { ingredientList } = values;
                    return (
                      <div>
                        {ingredientList.map((item, index) => {
                          return (
                            <div className='row' key={index}>
                              <div className='col-3'>
                                <Input
                                  name={`ingredientList.${index}.quantity`}
                                  placeholder={'Enter quantity'}
                                />
                              </div>
                              <div className='col-6'>
                                <Select
                                  name={`ingredientList.${index}.name`}
                                  options={dropdownOptions}
                                />
                              </div>
                              <div className='col-3'>
                                {index > 0 && (
                                  <button
                                    type='button'
                                    className='button icon-only'
                                    onClick={() => remove(index)}
                                  >
                                    ➖
                                  </button>
                                )}
                                {index <= 10 && (
                                  <button
                                    type='button'
                                    className='button icon-only'
                                    onClick={() => push('')}
                                  >
                                    ➕
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
              <p className='grouped'>
                <button type='reset'>Reset</button>
                <button
                  type='button'
                  onClick={() => setFormValues(savedValues)}
                >
                  Load saved data
                </button>
                <button
                  type='submit'
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </button>
              </p>
            </fieldset>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RecipeForm;
