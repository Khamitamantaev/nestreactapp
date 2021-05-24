import React from 'react';
import { FieldPrimary } from '../../../../lib/elements/field/field.primary';
import { FieldLayout } from '../../../../lib/elements/layout';
import { Button } from '../../../../lib/elements/button';
import styled from 'styled-components';

export function SignupFormComponent(props) {
  const {
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

  console.log(props)

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return isPending || isSuccess
  }

  // console.log(isError, errorMessage)

  return (
    <form onSubmit={handleSubmit}>
      <Container>
      {pageLoading.pageLoading && 'pageLoading'}
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
          Создать аккаунт
        </Button>
        {isPending && 'Loading...'}
        {isError && errorMessage}
      </Container>
    </form>
  );
}



const Container = styled.div`
  display: grid;
  gap: 12px;
`;


