import { FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE, SAVE_SEARCH_KEYWORD } from '../actions'

export default (state = {
    isFetching: false,
    results: [],
    count: 0,
    keyword: ''
}, action) => {
    switch (action.type) {
        case FETCH_SEARCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                results: action.results,
                count: action.count
            }
        case FETCH_SEARCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        case SAVE_SEARCH_KEYWORD:
            return {
                ...state,
                keyword: action.keyword
            }
        default:
            return state
    }
}
