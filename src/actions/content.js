import { content } from '../api'

export const FETCH_CONTENT_REQUEST = 'FETCH_CONTENT_REQUEST';
export const FETCH_CONTENT_SUCCESS = 'FETCH_CONTENT_SUCCESS';
export const FETCH_CONTENT_FAILURE = 'FETCH_CONTENT_FAILURE';

const fetchContentRequest = () => ({
    type: FETCH_CONTENT_REQUEST
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
    dispatch(fetchContentRequest())
    return content(category, ids, id).then(res => {
        dispatch(fetchContentSuccess(res.data))
    }).catch(error => {
        dispatch(fetchContentFailure())
    })
}

