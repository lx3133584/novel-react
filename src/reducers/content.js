import { FETCH_CONTENT_REQUEST, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_FAILURE } from '../actions'

export default (state = {
    isFetching: false,
    data: {},
    total: 0,
}, action) => {
    switch (action.type) {
        case FETCH_CONTENT_REQUEST:
            return {
                ...state,
                isFetching: true,
                data: {},
                total: 0,
            }
        case FETCH_CONTENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.res.data,
                total: action.res.countChapter,
            }
        case FETCH_CONTENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}
