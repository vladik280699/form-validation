import React from "react";
import s from "./Form.module.scss";
import FormInput from "./FormInput/FormInput";
import FormSelect from "./FormSelect/FormSelect";
import FormButton from "./FormButton/FormButton";
import { reduxForm } from "redux-form";

function Form({
	countries,
	states,
	cities,
	resetAll,
	enteredCountryIndex,
	enteredStateIndex,
	enteredCityIndex,
	setCity,
	setState,
	setCountry,
	...props
}) {
	return (
		<form className={s.form} onSubmit={props.handleSubmit}>
			<div className={s.form__title}>Basic Details</div>
			<div className={s.form__items}>
				<FormInput type="text" placeholder="Chandan" name={"firstName"}>
					First Name
				</FormInput>

				<FormInput type="text" placeholder="Mishra" name={"lastName"}>
					Last Name
				</FormInput>

				<FormInput
					type="email"
					placeholder="chandan@coditas.com"
					name={"email"}
				>
					Email ID
				</FormInput>

				<FormInput type="text" placeholder="chandan_m" name={"userId"}>
					Your User ID
				</FormInput>

				<FormSelect
					options={countries}
					enteredIndex={enteredCountryIndex}
					setOption={setCountry}
				>
					Country
				</FormSelect>

				<div className={`${s.form__items} ${s.form__items_two}`}>
					<FormSelect
						options={states}
						enteredIndex={enteredStateIndex}
						setOption={setState}
					>
						State
					</FormSelect>

					<FormSelect
						options={cities}
						enteredIndex={enteredCityIndex}
						setOption={setCity}
					>
						City
					</FormSelect>
				</div>

				<FormInput
					type="phone"
					placeholder="+380444455778"
					name={"phoneNumber"}
				>
					Phone number
				</FormInput>

				<FormInput
					type="text"
					placeholder="Reference Code"
					name={"referenceCode"}
				></FormInput>
				<div className={s.btn_white}>
					<FormButton
						onClick={() => {
							resetAll();
						}}
					>
						Reset All
					</FormButton>
				</div>
				<div className={s.btn_blue}>
					<FormButton>Continue</FormButton>
				</div>
			</div>
		</form>
	);
}

Form = reduxForm({
	form: "registration"
})(Form);

export default Form;
