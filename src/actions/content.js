import { content } from '../api'

export const FETCH_CONTENT_REQUEST = 'FETCH_CONTENT_REQUEST';
export const FETCH_CONTENT_SUCCESS = 'FETCH_CONTENT_SUCCESS';
export const FETCH_CONTENT_FAILURE = 'FETCH_CONTENT_FAILURE';

const fetchContentRequest = (params) => ({
    type: FETCH_CONTENT_REQUEST,
    params
})
const fetchContentSuccess = (res) => ({
    type: FETCH_CONTENT_SUCCESS,
    res
})
const fetchContentFailure = error => ({
    type: FETCH_CONTENT_FAILURE,
    error
})
export const fetchContent = (id, num) => dispatch => {
    dispatch(fetchContentRequest({id, num}))
    return content(id, num).then(res => {
        dispatch(fetchContentSuccess(res))
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchContentFailure(error))
        return {...error, status: false}
    })
}

