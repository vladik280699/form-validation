import React from 'react';
import {Field} from 'redux-form';
import s from './FormInput.module.scss';
import withFormItemWrapper from '../../../hoc/withFormItemWrapper';
import { Input } from '../../common/FormControls/FormControls';

function FormInput({placeholder, validation, type, name, setActiveStatus}) {
  return (
        <Field 
          className={s["form-input"]}
          onFocus={()=>{setActiveStatus(true)}} 
          onBlur={()=>{setActiveStatus(false)}} 
          placeholder={placeholder}
          component={Input}
          validate={validation}
          type={type}
          name={name}/>
  );
}

export default withFormItemWrapper(FormInput);
