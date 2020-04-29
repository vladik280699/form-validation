import React from 'react';
import {Field} from 'redux-form';
import s from './FormInput.module.scss';
import withFormItemWrapper from '../../../hoc/withFormItemWrapper';

function FormInput({placeholder, type, name, setActiveStatus, ...props}) {
  return (
        <Field 
          className={s["form-input"]}
          onFocus={()=>{setActiveStatus(true)}} 
          onBlur={()=>{setActiveStatus(false)}} 
          placeholder={placeholder}
          component='input'
          type={type}
          name={name}/>
  );
}

export default withFormItemWrapper(FormInput);
