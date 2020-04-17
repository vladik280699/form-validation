import React, { useState } from 'react';
import s from './FormInput.module.scss'

function FormInput({placeholder, type, value, setValue, ...props}) {
  const [isActive, setActiveStatus] = useState(false);
  const changeValue = (e) => {
    setValue(e.currentTarget.value);
  }
  return (
    <div className={`${s["form-input"]} + ${( isActive? s.active : "" )}`}>
      <div className={`${s["form-input__title"]} + ${( isActive? s.active : "" )}`}>{props.children}</div>
      <div className={s["form-input__input"]}>
        <input 
          onFocus={()=>{setActiveStatus(true)}} 
          onBlur={()=>{setActiveStatus(false)}} 
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={changeValue}/>
      </div>
    </div>
  );
}

export default FormInput;
