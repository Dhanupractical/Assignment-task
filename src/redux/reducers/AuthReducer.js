import { AuthTypes } from '../types';
const initialState = {
  isLoggedIn: false,
  user: {
    email: '',
    password: '',
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case AuthTypes.LOG_OUT:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}
export default reducer;
