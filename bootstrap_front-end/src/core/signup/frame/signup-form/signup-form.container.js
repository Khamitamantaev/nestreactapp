import React from 'react';
import { Formik } from 'formik';
import { SignupFormComponent } from './signup-form.component';
import { SIGNUP_FORM_FIELD_KEY } from './signup-form.type';
export function SignupFormContainer(props) {
  // const handleValidation = (value) => {
  //   return props.validation(value)
  // }
  // const { fieldName } = props;
  // console.log(fieldName)
  // console.log("----------")


  const LOGIN_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN];
  const PASSWORD_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD];

  return (
    <div>
      <Formik
        initialValues={props.initialValue}
        validate={props.validation}
        onSubmit={props.onSubmitForm}
      >
       {(props)=>(
         <SignupFormComponent
         fieldPassword={PASSWORD_NAME}
          fieldLogin={LOGIN_NAME}
          {...props}
         />
       )}
      </Formik>
    </div>
  );
}
