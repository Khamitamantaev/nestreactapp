import React from 'react';
import { FieldPrimary } from '../../../../lib/elements/field/field.primary';
import { FieldLayout,Container } from '../../../../lib/elements/layout';
import { Button } from '../../../../lib/elements/button';
import styled from 'styled-components';
import { SIGNUP_TITLE_KEY } from '../signup-form/signup-form.type';

export function SignupFormComponent(props) {
  const {
    title,
    fieldLogin,
    fieldPassword,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    pageLoading,
  } = props;

  console.log(props);

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  const LOADING = title[SIGNUP_TITLE_KEY.LOADING];
  const CREATE_BUTTON = title[SIGNUP_TITLE_KEY.CREATE_BUTTON_NAME];

  // console.log(isError, errorMessage)

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <FieldLayout>
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
            name={fieldLogin}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldLogin]}
            error={isFieldError(fieldLogin)}
          />
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldPassword]}
            error={isFieldError(fieldPassword)}
          />
        </FieldLayout>
        <Button type="submit" disabled={isSubmitDisabled()}>
          {CREATE_BUTTON}
        </Button>
        {isPending && LOADING}
        {isError && errorMessage}
      </Container>
    </form>
  );
}


