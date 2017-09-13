export const ADD_ONE_BOOK = 'ADD_ONE_BOOK';
export const REMOVE_ONE_BOOK = 'REMOVE_ONE_BOOK';
export const UPDATE_ONE_BOOK = 'UPDATE_ONE_BOOK';
export const INIT_BOOKSHELF = 'INIT_BOOKSHELF';

export const addOneBook = data => ({
    type: ADD_ONE_BOOK,
    data
})
export const removeOneBook = id => ({
    type: REMOVE_ONE_BOOK,
    id
})
export const updateOneBook = data => ({
    type: UPDATE_ONE_BOOK,
    data
})
export const initBookshelf = () => ({
    type: INIT_BOOKSHELF,
})
