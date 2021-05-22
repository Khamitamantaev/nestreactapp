import React from 'react';
import { Formik } from 'formik';
import { signupFormValidation } from './signup.validation';
import {SIGNUP_FIELD_NAME, SIGNUP_FORM_FIELD_NAME } from './signup.type';
import { SignupFormContainer } from './frame/signup-form';
export function SignupContainer() {
  const signupFormSendData = (value) => {
    //...
  };

  const signupFormGetInitialValue = () => {
    return {
      [SIGNUP_FIELD_NAME.LOGIN]: '',
      [SIGNUP_FIELD_NAME.PASSWORD]: '',
    };
  };

  return (
    <SignupFormContainer
      onSubmitForm={signupFormSendData}
      validation={signupFormValidation}
      initialValue={signupFormGetInitialValue()}
      fieldName={SIGNUP_FORM_FIELD_NAME}
    />
  );
}
