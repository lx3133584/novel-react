import { FETCH_CONTENT_REQUEST, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_FAILURE } from '../actions'

export default (state = {
    isFetching: false,
    content: '',
    title: ''
}, action) => {
    switch (action.type) {
        case FETCH_CONTENT_REQUEST:
            return {
                ...state,
                content: '',
                title: '',
                isFetching: true
            }
        case FETCH_CONTENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                content: action.result.content,
                title: action.result.title,
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
