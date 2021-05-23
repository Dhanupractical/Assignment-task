import { CredentialTypes } from '../types';
export const SaveUser = (user) => ({
  type: CredentialTypes.SAVE_USER,
  payload: user,
});
