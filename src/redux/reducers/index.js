import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';
import CredentialReducer from './CredentialReducer';

export default combineReducers({
  AuthReducer,
  PostReducer,
  CredentialReducer,
});
