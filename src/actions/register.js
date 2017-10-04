import { register } from '../api'

export const FETCH_REGISTER_REQUEST = 'FETCH_REGISTER_REQUEST';
export const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS';
export const FETCH_REGISTER_FAILURE = 'FETCH_REGISTER_FAILURE';

const fetchRegisterRequest = (user) => ({
    type: FETCH_REGISTER_REQUEST,
    user,
})
const fetchRegisterSuccess = token => ({
    type: FETCH_REGISTER_SUCCESS,
    token
})
const fetchRegisterFailure = error => ({
    type: FETCH_REGISTER_FAILURE,
    error
})
export const fetchRegister = (user) => dispatch => {
    dispatch(fetchRegisterRequest(user))
    return register(user).then(res => {
        dispatch(fetchRegisterSuccess(res.token))
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchRegisterFailure(error))
        return {...error, status: false}
    })
}

