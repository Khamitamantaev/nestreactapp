import React from 'react';
import { FieldPrimary } from '../../../../lib/elements/field/field.primary';

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
    isSubmitting,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
