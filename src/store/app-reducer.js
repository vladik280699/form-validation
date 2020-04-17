import {initialState} from "./initial-state";

const RESET_ALL = "RESET_ALL";
const SET_VALUE = "SET_VALUE";
const SET_SELECT = "SET_SELECT";

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ALL:
      return initialState

    case SET_VALUE:
      return {...state,
        [action.nameValue]: action.value}
    default:
      return state;
  }
}

export const resetAll = () => ({
  type: RESET_ALL
})

const setValue = (value, nameValue) => ({
  value, 
  nameValue,
  type: SET_VALUE
})

export const setCountry = (value) => (setValue(value, "enteredCountryIndex"));

export const setState = (value) => (setValue(value, "enteredStateIndex"));

export const setCity = (value) => (setValue(value, "enteredCityIndex"));

export const setFirstName = (value) => (setValue(value, "firstName"));

export const setLastName = (value) => (setValue(value, "lastName"));

export const setEmail = (value) => (setValue(value, "email"));

export const setUserId = (value) => (setValue(value, "userId"));

export const setPhoneNumber = (value) => (setValue(value, "phoneNumber"));

export const setReferenceCode = (value) => (setValue(value, "referenceCode"));

export default appReducer;