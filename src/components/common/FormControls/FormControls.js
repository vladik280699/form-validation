import React, { useState } from "react";
import styles from "./FormControls.module.scss";

export const Input = ({input, meta: {touched, error, active}, ...props}) => {
  const hasError = touched && error;
    
  return (
    <div className={styles.formControl + " " + (active ? styles.active : "") + " " + (hasError ? styles.error : "")}>
        <div>
          <input  {...input} {...props}/>
        </div>
        <div className={styles.errorMessage}>
          {hasError && <span>{error}</span>}
        </div>
    </div>
)
}
