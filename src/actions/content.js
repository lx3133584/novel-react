import { content } from '../api'

export const FETCH_CONTENT_REQUEST = 'FETCH_CONTENT_REQUEST';
export const FETCH_CONTENT_SUCCESS = 'FETCH_CONTENT_SUCCESS';
export const FETCH_CONTENT_FAILURE = 'FETCH_CONTENT_FAILURE';

const fetchContentRequest = (params) => ({
    type: FETCH_CONTENT_REQUEST,
    params
})
const fetchContentSuccess = (result) => ({
    type: FETCH_CONTENT_SUCCESS,
    result
})
const fetchContentFailure = error => ({
    type: FETCH_CONTENT_FAILURE,
    error
})
export const fetchContent = (category, ids, id) => dispatch => {
    dispatch(fetchContentRequest({category, ids, id}))
    return content(category, ids, id).then(res => {
        dispatch(fetchContentSuccess(res.data))
    }).catch(error => {
        dispatch(fetchContentFailure())
    })
}

