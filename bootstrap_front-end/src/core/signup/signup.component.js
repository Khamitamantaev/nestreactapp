import React from 'react'
import { SignupFormContainer } from './frame/signup-form'

export function SignupComponent(props) {
  return(
    <div>
      <div>Регистрация</div>
      <SignupFormContainer {...props}/>
      <div>Есть аккаунт? Войти</div>
    </div>
  )
}
