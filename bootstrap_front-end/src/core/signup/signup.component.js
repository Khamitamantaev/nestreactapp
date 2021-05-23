import React from 'react';
import { SignupFormContainer } from './frame/signup-form';
import { HaveAccountLayout, RegisterLayout } from '../../lib/elements/layout';

export function SignupComponent(props) {
  return (
    <div>
      <RegisterLayout>
        <div>Регистрация</div>
      </RegisterLayout>
          <SignupFormContainer {...props} />
      <HaveAccountLayout>
        <div>Есть аккаунт? <a href="#">Войти</a></div>
      </HaveAccountLayout>
    </div>
  );
}
