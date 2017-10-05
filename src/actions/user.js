import { getInfo } from '../api'

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
