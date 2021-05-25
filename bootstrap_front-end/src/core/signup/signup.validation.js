import { SIGNUP_VALIDATION_EMAIL } from './signup.constant'

export function signupFormValidation (values){
  const errors = {};
  if (!values.login) {
    errors.email = `${SIGNUP_VALIDATION_EMAIL}`;
  }
  return errors;
}