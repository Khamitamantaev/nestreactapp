import { routesInit } from './router.core';
import {signupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
export const routes = {
    [SIGNUP_ROUTE_PATH]:signupRouter 

};

export const Router = routesInit(routes);
