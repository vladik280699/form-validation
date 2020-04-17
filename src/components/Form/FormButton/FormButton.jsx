import React from 'react';
import s from './FormButton.module.scss'

function FormButton(props) {

  return (
   <div className={s["form-btn"]}>{props.children}</div>
  );
}

export default FormButton;
