import { getBookshelf, addBook, removeBook } from '../api';

// 获取我的书架列表
export const FETCH_GET_BOOKSHELF_REQUEST = 'FETCH_GET_BOOKSHELF_REQUEST';
export const FETCH_GET_BOOKSHELF_SUCCESS = 'FETCH_GET_BOOKSHELF_SUCCESS';
export const FETCH_GET_BOOKSHELF_FAILURE = 'FETCH_GET_BOOKSHELF_FAILURE';

const fetchGetBookshelfRequest = () => ({
    type: FETCH_GET_BOOKSHELF_REQUEST
})
const fetchGetBookshelfSuccess = (data) => ({
    type: FETCH_GET_BOOKSHELF_SUCCESS,
    data
})
const fetchGetBookshelfFailure = error => ({
    type: FETCH_GET_BOOKSHELF_FAILURE,
    error
})
export const fetchGetBookshelf = () => dispatch => {
    dispatch(fetchGetBookshelfRequest())
    return getBookshelf().then(res => {
        dispatch(fetchGetBookshelfSuccess(res.data))
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchGetBookshelfFailure(error))
        return {...error, status: false}
    })
}

// 添加一本书到书架
export const FETCH_ADD_BOOK_REQUEST = 'FETCH_ADD_BOOK_REQUEST';
export const FETCH_ADD_BOOK_SUCCESS = 'FETCH_ADD_BOOK_SUCCESS';
export const FETCH_ADD_BOOK_FAILURE = 'FETCH_ADD_BOOK_FAILURE';

const fetchAddBookRequest = () => ({
    type: FETCH_ADD_BOOK_REQUEST
})
const fetchAddBookSuccess = () => ({
    type: FETCH_ADD_BOOK_SUCCESS
})
const fetchAddBookFailure = error => ({
    type: FETCH_ADD_BOOK_FAILURE,
    error
})
export const fetchAddBook = (id) => dispatch => {
    dispatch(fetchAddBookRequest())
    return addBook(id).then(res => {
        dispatch(fetchAddBookSuccess())
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchAddBookFailure(error))
        return {...error, status: false}
    })
}

// 从书架删除一本书
export const FETCH_REMOVE_BOOK_REQUEST = 'FETCH_REMOVE_BOOK_REQUEST';
export const FETCH_REMOVE_BOOK_SUCCESS = 'FETCH_REMOVE_BOOK_SUCCESS';
export const FETCH_REMOVE_BOOK_FAILURE = 'FETCH_REMOVE_BOOK_FAILURE';

const fetchRemoveBookRequest = () => ({
    type: FETCH_REMOVE_BOOK_REQUEST
})
const fetchRemoveBookSuccess = () => ({
    type: FETCH_REMOVE_BOOK_SUCCESS
})
const fetchRemoveBookFailure = error => ({
    type: FETCH_REMOVE_BOOK_FAILURE,
    error
})
export const fetchRemoveBook = (id) => dispatch => {
    dispatch(fetchRemoveBookRequest())
    return removeBook(id).then(res => {
        dispatch(fetchRemoveBookSuccess())
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchRemoveBookFailure(error))
        return {...error, status: false}
    })
}

