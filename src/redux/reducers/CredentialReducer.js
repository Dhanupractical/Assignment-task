import { CredentialTypes } from '../types';
const initialState = {
  savedUser: [], //{email,password}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CredentialTypes.SAVE_USER:
      return {
        ...state,
        savedUser: [...state.savedUser, action.payload],
      };
    default:
      return state;
  }
}
export default reducer;
