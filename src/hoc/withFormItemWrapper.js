import React, { useState } from 'react';
import s from './withFormItemWrapper.module.scss';


const withFormItemWrapper =  (Component) => {
  const ComponentContainer = (props) => {
    const [isActive, setActiveStatus] = useState(false);
    return (
      <div className={`${s["form-item"]} + ${( isActive? s.active : "" )}`}>
        <div className={`${s["form-item__title"]} + ${( isActive? s.active : "" )}`}>{props.children}</div>
        <Component setActiveStatus={setActiveStatus} isActive={isActive} {...props}/>
      </div>
    );
  }
  return ComponentContainer;
}

export default withFormItemWrapper;
