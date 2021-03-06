import { FETCH_DETAIL_REQUEST, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_FAILURE, MARK_ADD_BOOK } from '../actions'

export default (state = {
    isFetching: false,
    result: {},
}, action) => {
    switch (action.type) {
        case FETCH_DETAIL_REQUEST:
            return {
                ...state,
                result: {},
                isFetching: true
            }
        case FETCH_DETAIL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                result: {...action.result},
            }
        case FETCH_DETAIL_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        case MARK_ADD_BOOK:
            return {
                ...state,
                result: {...state.result, join: true},
            }
        default:
            return state
    }
}
