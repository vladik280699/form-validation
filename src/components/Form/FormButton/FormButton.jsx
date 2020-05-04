import React from 'react';
import s from './FormButton.module.scss'

function FormButton({type, ...props}) {

  return (
   <button type={type} className={s["form-btn"]}>{props.children}</button>
  );
}

export default FormButton;
