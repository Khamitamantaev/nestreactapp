import { authRedirectLogged } from '../../lib/common/auth';
import { setActivePath, SetActivePath} from '../../lib/common/navigation';

import { SIGNUP_REDIRECT_ON_LOGGED, SIGNUP_ROUTE_PATH } from './signup.constant';

export async function signupRouter(ctx) {
  ctx.store.dispatch(setActivePath(SIGNUP_ROUTE_PATH));
  // authRedirectLogged(ctx, SIGNUP_REDIRECT_ON_LOGGED);
  }