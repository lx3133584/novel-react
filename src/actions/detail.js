import { detail } from '../api'

export const FETCH_DETAIL_REQUEST = 'FETCH_DETAIL_REQUEST';
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS';
export const FETCH_DETAIL_FAILURE = 'FETCH_DETAIL_FAILURE';

const fetchDetailRequest = () => ({
    type: FETCH_DETAIL_REQUEST
})
const fetchDetailSuccess = (result) => ({
    type: FETCH_DETAIL_SUCCESS,
    result
})
const fetchDetailFailure = error => ({
    type: FETCH_DETAIL_FAILURE,
    error
})
export const fetchDetail = (id, name, url) => dispatch => {
    dispatch(fetchDetailRequest())
    return detail(id, name, url).then(res => {
        dispatch(fetchDetailSuccess(res.data))
    }).catch(error => {
        dispatch(fetchDetailFailure(error))
    })
}

