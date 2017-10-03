import { search } from '../api'

export const FETCH_SEARCH_REQUEST = 'FETCH_SEARCH_REQUEST';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE';
export const SAVE_SEARCH_KEYWORD = 'SAVE_SEARCH_KEYWORD';

const fetchSearchRequest = () => ({
    type: FETCH_SEARCH_REQUEST
})
const fetchSearchSuccess = (results, count) => ({
    type: FETCH_SEARCH_SUCCESS,
    results,
    count
})
const fetchSearchFailure = error => ({
    type: FETCH_SEARCH_FAILURE,
    error
})
export const saveSearchKeyword = keyword => ({
    type: SAVE_SEARCH_KEYWORD,
    keyword
})
export const fetchSearch = (keyword, pageNo) => dispatch => {
    dispatch(fetchSearchRequest())
    return search(keyword, pageNo).then(res => {
        dispatch(fetchSearchSuccess(res.data, res.count))
    }).catch(error => {
        dispatch(fetchSearchFailure(error))
    })
}

