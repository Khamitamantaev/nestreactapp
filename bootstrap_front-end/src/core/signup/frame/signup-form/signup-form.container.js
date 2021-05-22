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


  const {
    initialValue,
    validation,
    onSubmitForm,
    fieldName,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    pageLoading,
  }= props;


  const LOGIN_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN];
  const PASSWORD_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD];

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validate={validation}
        onSubmit={onSubmitForm}
      >
       {(formProps)=>(
         <SignupFormComponent
         fieldPassword={PASSWORD_NAME}
          fieldLogin={LOGIN_NAME}
          {...formProps}
          isPending={isPending}
          isSuccess={isSuccess}
          isError={isError}
          errorMessage={errorMessage}
          pageLoading={pageLoading}
         />
       )}
      </Formik>
    </div>
  );
}
