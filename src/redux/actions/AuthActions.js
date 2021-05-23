import { AuthTypes } from '../types';

export const LogIn = (user) => ({
  type: AuthTypes.LOG_IN,
  payload: user,
});
export const LogOut = () => ({
  type: AuthTypes.LOG_OUT,
});
