import { getRank } from '../api'

export const FETCH_GET_RANK_REQUEST = 'FETCH_GET_RANK_REQUEST';
export const FETCH_GET_RANK_SUCCESS = 'FETCH_GET_RANK_SUCCESS';
export const FETCH_GET_RANK_FAILURE = 'FETCH_GET_RANK_FAILURE';

const fetchRankRequest = () => ({
    type: FETCH_GET_RANK_REQUEST
})
const fetchRankSuccess = results => ({
    type: FETCH_GET_RANK_SUCCESS,
    results
})
const fetchRankFailure = error => ({
    type: FETCH_GET_RANK_FAILURE,
    error
})
export const fetchRank = () => dispatch => {
    dispatch(fetchRankRequest())
    return getRank().then(res => {
        dispatch(fetchRankSuccess(res.data))
    }).catch(error => {
        dispatch(fetchRankFailure(error))
    })
}
