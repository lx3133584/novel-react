import { getInfo, editName } from '../api'

export const FETCH_INFO_REQUEST = 'FETCH_INFO_REQUEST';
export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS';
export const FETCH_INFO_FAILURE = 'FETCH_INFO_FAILURE';

const fetchInfoRequest = () => ({
    type: FETCH_INFO_REQUEST
})
const fetchInfoSuccess = data => ({
    type: FETCH_INFO_SUCCESS,
    data
})
const fetchInfoFailure = error => ({
    type: FETCH_INFO_FAILURE,
    error
})
export const fetchInfo = () => dispatch => {
    dispatch(fetchInfoRequest())
    return getInfo().then(res => {
        dispatch(fetchInfoSuccess(res.data))
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchInfoFailure(error))
        return {...error, status: false}
    })
}

export const FETCH_EDIT_NAME_REQUEST = 'FETCH_EDIT_NAME_REQUEST';
export const FETCH_EDIT_NAME_SUCCESS = 'FETCH_EDIT_NAME_SUCCESS';
export const FETCH_EDIT_NAME_FAILURE = 'FETCH_EDIT_NAME_FAILURE';

const fetchEditNameRequest = name => ({
    type: FETCH_EDIT_NAME_REQUEST,
    name
})
const fetchEditNameSuccess = () => ({
    type: FETCH_EDIT_NAME_SUCCESS
})
const fetchEditNameFailure = error => ({
    type: FETCH_EDIT_NAME_FAILURE,
    error
})
export const fetchEditName = (name) => dispatch => {
    dispatch(fetchEditNameRequest(name))
    return editName(name).then(res => {
        dispatch(fetchEditNameSuccess())
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchEditNameFailure(error))
        return {...error, status: false}
    })
}
