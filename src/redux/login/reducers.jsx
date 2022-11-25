import {
  LOGIN_SUCCESS, LOGIN_FAIL,
} from './actions';

function loginAuthReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        message: 'SUCCESFULLY LOGGED IN',
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        message: (action.payload.message).toUpperCase(),
      };
    default:
      return state;
  }
}

export default loginAuthReducer;
