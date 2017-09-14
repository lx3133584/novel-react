import { FETCH_CONTENT_REQUEST, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_FAILURE } from '../actions'

export default (state = {
    isFetching: false,
    content: '',
    title: '',
    cur: 0,
    first_id: 0,
    total: 0,
    params: {
        category: 0,
        ids: 0,
        id: 0,
    }
}, action) => {
    switch (action.type) {
        case FETCH_CONTENT_REQUEST:
            return {
                ...state,
                content: '',
                title: '',
                cur: 0,
                total: 0,
                first_id: 0,
                isFetching: true,
                params: {...action.params}
            }
        case FETCH_CONTENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                content: action.result.content,
                title: action.result.title,
                cur: action.result.cur,
                first_id: action.result.first_id,
                total: action.result.total,
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
