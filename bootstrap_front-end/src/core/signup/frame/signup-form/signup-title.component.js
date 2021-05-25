import React from 'react'
import { RegisterTitle } from '../../../../lib/elements/title'


export function SignupTitleComponent(props) {

  const {
    registerTitle
  } = props;

  return(
    <RegisterTitle>{registerTitle}</RegisterTitle>
  )
}
