import { FETCH_INFO_REQUEST, FETCH_INFO_SUCCESS, FETCH_INFO_FAILURE } from '../actions'

export default (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case FETCH_INFO_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_INFO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case FETCH_INFO_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}
