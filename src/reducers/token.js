import { INIT_TOKEN, REMOVE_TOKEN, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_FAILURE } from '../actions'

export default (state = {
    isFetching: false,
    token: ''
}, action) => {
    switch (action.type) {
        case INIT_TOKEN:
            return {
                ...state,
                token: localStorage.getItem('TOKEN'),
            }
        case REMOVE_TOKEN:
            return {
                ...state,
                token: '',
            }
        case FETCH_LOGIN_REQUEST:
            return {
                ...state,
                token: '',
                isFetching: true
            }
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                token: 'Bearer ' +action.token,
            }
        case FETCH_LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        case FETCH_REGISTER_REQUEST:
            return {
                ...state,
                token: '',
                isFetching: true
            }
        case FETCH_REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                token: 'Bearer ' +action.token,
            }
        case FETCH_REGISTER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}
