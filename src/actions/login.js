import { login } from '../api'

export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
export const INIT_TOKEN = 'INIT_TOKEN';

const fetchLoginRequest = (account, password) => ({
    type: FETCH_LOGIN_REQUEST,
    account,
    password,
})
const fetchLoginSuccess = token => ({
    type: FETCH_LOGIN_SUCCESS,
    token
})
const fetchLoginFailure = error => ({
    type: FETCH_LOGIN_FAILURE,
    error
})
export const initToken = () => ({
  type: INIT_TOKEN
})
export const fetchLogin = (account, password) => dispatch => {
    dispatch(fetchLoginRequest(account, password))
    return login(account, password).then(res => {
        dispatch(fetchLoginSuccess(res.token))
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchLoginFailure(error))
        return {...error, status: false}
    })
}

