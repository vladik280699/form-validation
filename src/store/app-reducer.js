import {initialState} from "./initial-state";

const RESET_ALL = "RESET_ALL";
const SET_VALUE = "SET_VALUE";

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

const setValue = (nameValue) => (value) => ({
  value, 
  nameValue,
  type: SET_VALUE
})

export const setCountry = setValue("enteredCountryIndex");

export const setState = setValue("enteredStateIndex");

export const setCity = setValue("enteredCityIndex");


export default appReducer;
