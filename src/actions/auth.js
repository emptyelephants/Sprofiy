import jwtDecode from 'jwt-decode';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
}


export const login = (username, password) => dispatch => {


    dispatch(authRequest())
    return fetch(`${API_BASE_URL}/login`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => normalizeResponseErrors(res))
      .then(res=> res.json())
      .then(({authToken}) => storeAuthInfo(authToken,dispatch))
      .catch(err => {
        const code = err;
        const message =
            code ===  401
                ? 'Incorrect username or password'
                : 'Unable to login, try again later';
        dispatch(authError(err));
        return message;
      })
}
