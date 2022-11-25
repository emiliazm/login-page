import login from '../../api/requestApi';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAILURE';

export const postLogin = (email, password) => async (dispatch) => {
  login(email, password).then((data) => {
    if (data.email) {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } else {
      dispatch({ type: LOGIN_FAIL, payload: data });
    }
  });
};
