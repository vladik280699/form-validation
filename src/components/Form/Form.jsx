import React from "react";
import s from "./Form.module.scss";
import FormInput from "./FormInput/FormInput";
import FormSelect from "./FormSelect/FormSelect";
import FormButton from "./FormButton/FormButton";
import { reduxForm } from "redux-form";
import { required, minLengthCreator, maxLengthCreator, onlyCyrillic, email, onlyLatinAndUnderline, phoneUA, onlyLatinAndFigures, valueLengthCreator} from "../../utils/validators/validators";


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
				<FormInput type="text" placeholder="Chandan" name={"firstName"} validation={[required, minLengthCreator(2), maxLengthCreator(50), onlyCyrillic]}>
					First Name
				</FormInput>

				<FormInput type="text" placeholder="Mishra" name={"lastName"} validation={[required, minLengthCreator(2), maxLengthCreator(50), onlyCyrillic]}>
					Last Name
				</FormInput>

				<FormInput
					validation={[required, maxLengthCreator(255), email]}
					type="email"
					placeholder="chandan@coditas.com"
					name={"email"}
				>
					Email ID
				</FormInput>

				<FormInput type="text" placeholder="chandan_m" name={"userId"} validation={[required, minLengthCreator(5), maxLengthCreator(30), onlyLatinAndUnderline]}>
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
					validation={[required, phoneUA]}
				>
					Phone number
				</FormInput>

				<FormInput
					type="text"
					placeholder="Reference Code"
					name={"referenceCode"}
					validation={[valueLengthCreator(10), onlyLatinAndFigures]}
				></FormInput>
				<div className={s.btn +" " + s.btn_white}>
					<FormButton	type="reset">
						Reset All
					</FormButton>
				</div>
				<div className={s.btn +" " + s.btn_blue}>
					<FormButton type="submit">Continue</FormButton>
				</div>
			</div>
		</form>
	);
}

Form = reduxForm({
	form: "registration"
})(Form);

export default Form;
