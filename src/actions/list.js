import { list } from '../api'

export const FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';

const fetchListRequest = () => ({
    type: FETCH_LIST_REQUEST
})
const fetchListSuccess = (result) => ({
    type: FETCH_LIST_SUCCESS,
    result
})
const fetchListFailure = error => ({
    type: FETCH_LIST_FAILURE,
    error
})
export const fetchList = (category, ids) => dispatch => {
    dispatch(fetchListRequest())
    return list(category, ids).then(res => {
        dispatch(fetchListSuccess(res.data))
    }).catch(error => {
        dispatch(fetchListFailure())
    })
}

