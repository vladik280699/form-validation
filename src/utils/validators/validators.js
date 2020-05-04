const regExpCyrillic = /[а-яА-ЯЁё]/;
const regExpEmail = /\S+@\S+\.\S+/;
const regExpPhoneUA =  /^\+380\d{9}$/;

export const required = value => {
  if (value) return undefined;
  return "Field is required";
  
}

export const valueLengthCreator = (valueLength) => (value) => {
  if (value && value.length != valueLength) return `Value length must be ${valueLength} symbols`;
  return undefined;
}

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
}

export const minLengthCreator = (minLength) => (value) => {
  if (value && value.length < minLength) return `Min length is ${minLength} symbols`;
  return undefined;
}

export const onlyCyrillic = value => {
  if (regExpCyrillic.test(value)) return undefined;
  return "Must be only cyrillic";
}

export const email = value => {
  if (regExpEmail.test(value)) return undefined;
  return "Email isn`t valid";
}

export const onlyLatinAndUnderline = value => {
  if (/^[a-zA-Z0-9_]+$/.test(value)) return undefined;
  return "Must be only latin or underline";
}
export const onlyLatinAndFigures = value => {
  if (/^[a-zA-Z0-9]+$/.test(value)) return undefined;
  return "Must be only latin or figures";
}

export const phoneUA = (value) => {
  if (regExpPhoneUA.test(value)) return undefined;
  return "phone number isn`t valid";
}
