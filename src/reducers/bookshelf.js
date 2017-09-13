import { ADD_ONE_BOOK, REMOVE_ONE_BOOK, UPDATE_ONE_BOOK, INIT_BOOKSHELF } from '../actions'

export default (state = {
    data: {},
    list: []
}, action) => {
    let book = action.data || {}
    let uid = book.uid || action.id || 0
    let list = [...state.list]
    let index = list.indexOf(uid)
    switch (action.type) {
        case ADD_ONE_BOOK:
            list.push(uid)
            localStorage.setItem(`BOOK${uid}`, JSON.stringify(book))
            localStorage.setItem(`BOOKSHELF`, JSON.stringify(list))
            return {
                ...state,
                data: {
                    ...state.data,
                    [uid]: book,
                },
                list,
            }
        case REMOVE_ONE_BOOK:
            if (index !== -1) {
                list.splice(index, 1)
                localStorage.removeItem(`BOOK${uid}`)
                localStorage.setItem(`BOOKSHELF`, JSON.stringify(list))
            }
            return {
                ...state,
                data: {
                    ...state.data,
                    [uid]: undefined,
                },
                list,
            }
        case UPDATE_ONE_BOOK:
            return {
                ...state,
                data: {
                    ...state.data,
                    data: {
                        ...state.data,
                        [uid]: book,
                    },
                },
            }
        case INIT_BOOKSHELF:
            let data = {}
            list = JSON.parse(localStorage.getItem(`BOOKSHELF`) || '[]')
            for (let item of list) {
                data[item] = JSON.parse(localStorage.getItem(`BOOK${item}`) || '{}')
            }
            return {
                ...state,
                data: {
                    ...state.data,
                    data,
                    list,
                },
            }
        default:
            return state
    }
}