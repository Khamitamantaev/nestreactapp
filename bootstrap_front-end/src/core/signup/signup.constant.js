export const SIGNUP_ROUTE_PATH = '/signup'
// export const SIGNUP_ROUTE_PATH_DINAMIC = () => '/signup'

export const SIGNUP_STORE_NAME = 'SIGNUP';
export const SIGNUP_FORM_REDIRECT_ON_UPLOAD_PATH = '/home';
export const SIGNUP_REDIRECT_ON_LOGGED = '/logout';
export const SIGNUP_VALIDATION_EMAIL='Required';

export const SIGNUP_API = {
  SIGNUP_FORM_UPLOAD:{ 
    ENDPOINT: '/auth/signup',
    METHOD: 'POST',
  }
}