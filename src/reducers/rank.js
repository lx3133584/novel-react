import { FETCH_GET_RANK_REQUEST, FETCH_GET_RANK_SUCCESS, FETCH_GET_RANK_FAILURE } from '../actions'

export default (state = {
    isFetching: false,
    results: [],
}, action) => {
    switch (action.type) {
        case FETCH_GET_RANK_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_GET_RANK_SUCCESS:
            return {
                ...state,
                isFetching: false,
                results: action.results,
            }
        case FETCH_GET_RANK_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}
