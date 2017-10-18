import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from '../actions'

export default (state = {
    isFetching: false,
    title: '',
    id: '',
    list: [],
}, action) => {
    switch (action.type) {
        case FETCH_LIST_REQUEST:
            return {
                ...state,
                list: [],
                id: action.id,
                isFetching: true
            }
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                title: action.result.title,
                list: [...action.result.list],
            }
        case FETCH_LIST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}
