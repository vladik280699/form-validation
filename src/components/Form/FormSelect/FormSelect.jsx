import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import s from './FormSelect.module.scss'


function FormSelect({options, enteredIndex, setOption, ...props}) {
  const [isActive, setActiveStatus] = useState(false);
  const changeCurrentSelect = (e) => {
    setOption(e.currentTarget.id)
  }
  return (
    <div className={s["form-select"]}>
      <div className={`${s["form-select__title"]} + ${( isActive? s.active : "" )}`}>{props.children}</div>
     
      <div className={`${s["select"]} + ${( isActive? s.active : "" )}`}
            onClick={()=>{setActiveStatus(!isActive)}}>
        <div className={s["select__header"]}>
          <span className={s["select__current"]}>{options[enteredIndex].name}</span>
          <div className={s["select__icon"]}>{isActive? <IoIosArrowUp/>:<IoIosArrowDown/>}</div>
        </div>

        <div className={s["select__body"]} onMouseLeave={()=>{setActiveStatus(false)}}>
          {options.map((i)=><div id={i.id} 
                                    className={s["select__item"]}
                                    onClick={changeCurrentSelect}>{i.name}</div>)}
        </div>
      </div>
    </div>
  );
}

export default FormSelect;
