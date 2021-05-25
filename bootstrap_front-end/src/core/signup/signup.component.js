import React from 'react';
import { SignupFormContainer } from './frame/signup-form';
import { SignupTitleComponent } from './frame/signup-form/signup-title.component';
import {SIGNUP_TITLE_KEY } from './frame/signup-form'

export function SignupComponent(props) {

  const {
    title
  } = props

  const REGISTRATION = title[SIGNUP_TITLE_KEY.REGISTRATION];
  const ACCOUNT = title[SIGNUP_TITLE_KEY.ACCOUNT];

  return (
    <div>
      <SignupTitleComponent registerTitle={REGISTRATION}  />
      <SignupFormContainer {...props} />
      <SignupTitleComponent registerTitle={ACCOUNT} />
    </div>
  );
}
