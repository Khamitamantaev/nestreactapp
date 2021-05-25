import React from 'react';
import { Formik } from 'formik';
import { signupFormValidation } from './signup.validation';
import {SIGNUP_FIELD_NAME, SIGNUP_FORM_FIELD_NAME, SIGNUP_TITLE_NAME } from './signup.type';
import { SignupFormContainer } from './frame/signup-form';
import { signupFormUploadData } from './signup.action';
import {useDispatch, useSelector} from 'react-redux'
import { convertSignupFormData } from './signup.convert';
import { SIGNUP_STORE_NAME } from './signup.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { isRequestError, isRequestSuccess, getErrorMessage, isRequestPending } from '../../main/store/store.service'
import { SignupComponent } from './signup.component';

export function SignupContainer() {

  const dispatch = useDispatch()

  const { state, pageLoading} = useSelector((state) => ({
    state: state[SIGNUP_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));


  const signupFormSendData = (values) => {
    const data = convertSignupFormData(values)
    dispatch(signupFormUploadData(data))
  };

  const signupFormGetInitialValue = () => {


    return {
      [SIGNUP_FIELD_NAME.LOGIN]: '',
      [SIGNUP_FIELD_NAME.PASSWORD]: '',
    };
  };

  return (
    <SignupComponent
      title={SIGNUP_TITLE_NAME}
      isPending={isRequestPending(state.signupForm)}
      isError={isRequestError(state.signupForm)}
      isSuccess={isRequestSuccess(state.signupForm)}
      errorMessage={getErrorMessage(state.signupForm)}
      onSubmitForm={signupFormSendData}
      validation={signupFormValidation}
      initialValue={signupFormGetInitialValue()}
      fieldName={SIGNUP_FORM_FIELD_NAME}
      pageLoading={pageLoading}
    />
  );
}
