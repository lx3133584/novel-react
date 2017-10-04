import { FETCH_GET_BOOKSHELF_REQUEST, FETCH_GET_BOOKSHELF_SUCCESS, FETCH_GET_BOOKSHELF_FAILURE, FETCH_ADD_BOOK_REQUEST, FETCH_ADD_BOOK_SUCCESS, FETCH_ADD_BOOK_FAILURE, FETCH_REMOVE_BOOK_REQUEST, FETCH_REMOVE_BOOK_SUCCESS, FETCH_REMOVE_BOOK_FAILURE } from '../actions'

export default (state = {
    isFetching: false,
    list: []
}, action) => {
    switch (action.type) {
        case FETCH_GET_BOOKSHELF_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        
        case FETCH_GET_BOOKSHELF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: action.data
            }
        
        case FETCH_GET_BOOKSHELF_FAILURE:
            return {
                ...state,
                isFetching: false,
            }
        
        case FETCH_ADD_BOOK_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        
        case FETCH_ADD_BOOK_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        
        case FETCH_ADD_BOOK_FAILURE:
            return {
                ...state,
                isFetching: false,
            }
        
        case FETCH_REMOVE_BOOK_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        
        case FETCH_REMOVE_BOOK_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        
        case FETCH_REMOVE_BOOK_FAILURE:
            return {
                ...state,
                isFetching: false,
            }
        
        default:
            return state
    }
}
