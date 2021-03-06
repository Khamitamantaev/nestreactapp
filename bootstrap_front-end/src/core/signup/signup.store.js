import { initRequestState, setRequestPending, setRequestSuccess, setRequestError } from '../../main/store/store.service';
import { SIGNUP_ACTION_TYPE } from './signup.type';

const initialState = {
  signupForm: initRequestState(), //базовые поля для singupForm

};

export function signupStore(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_PENDING:
      return {
        ...state,
        signupForm: setRequestPending(state.signupForm)
      };
    case SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        signupForm: setRequestSuccess(state.signupForm)
      };
    case SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_ERROR:
      return {
        ...state,
        signupForm: setRequestError(state.signupForm, action.message)
      };

    default:
      return state;
  }
}
