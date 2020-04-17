import React from 'react';
import s from './Form.module.scss';
import FormInput from './FormInput/FormInput'
import FormSelect from './FormSelect/FormSelect';
import FormButton from './FormButton/FormButton';
import { reduxForm } from 'redux-form';

const ReduxForm = reduxForm({
  form: "registration"
})(Form)


function Form({
  firstName,
  lastName,
  email,
  userId,
  countries,
  states,
  cities,
  phoneNumber,
  referenceCode,
  setFirstName,
  setLastName,
  setEmail,
  setUserId,
  setPhoneNumber,
  setReferenceCode,
  resetAll,
  enteredCountryIndex,
  enteredStateIndex,
  enteredCityIndex,
  setCity, 
  setState,
  setCountry
}) {
  return (
    <form className={s.form}>
      <div className={s.form__title}>Basic Details</div>
        <div className={s.form__items}>
          <div className={s["form-item"]}>
            <FormInput type="text" placeholder="Chandan" value={firstName} setValue={setFirstName}>First Name</FormInput>
          </div>
          <div className={s["form-item"]}>
            <FormInput type="text" placeholder="Mishra" value={lastName} setValue={setLastName}>Last Name</FormInput>
          </div>
          <div className={s["form-item"]}>
            <FormInput type="email" placeholder="chandan@coditas.com" value={email} setValue={setEmail}>Email ID</FormInput>
          </div>
          <div className={s["form-item"]}>
            <FormInput type="text" placeholder="chandan_m" value={userId} setValue={setUserId}>Your User ID</FormInput>
          </div>
          <div className={s["form-item"]}>
              <FormSelect options={countries} enteredIndex={enteredCountryIndex} setOption={setCountry}>Country</FormSelect>
          </div>
            
          <div className={`${s.form__items} ${s.form__items_two}`}>
            <div className={s["form-item"]}>
              <FormSelect options={states} enteredIndex={enteredStateIndex} setOption={setState}>State</FormSelect>
            </div>
            <div className={s["form-item"]}>
              <FormSelect options={cities} enteredIndex={enteredCityIndex} setOption={setCity}>City</FormSelect>
            </div>
          </div>
          <div className={s["form-item"]}>
            <FormInput type="phone" placeholder="+380444455778" value={phoneNumber} setValue={setPhoneNumber}>Phone number</FormInput>
          </div>
          <div className={s["form-item"]}>
            <FormInput type="text" placeholder="Reference Code" value={referenceCode} setValue={setReferenceCode}></FormInput>
          </div>
          <div className={s.btn_white}>
            <FormButton onClick={()=>{resetAll()}}>Reset All</FormButton>
          </div>
          <div className={s.btn_blue}>
            <FormButton>Continue</FormButton>
          </div>        
        </div>
    </form>
  );
}

export default Form;
