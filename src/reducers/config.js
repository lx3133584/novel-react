import { INIT_CONFIG, CHANGE_FONT_SIZE, CHANGE_LINE_HEIFHT, CHAGNE_THEME } from '../actions'

export default (state = {
    fontSize: 24,
    lineHeight: 1.6,
    background: '#FFF',
    color: '#000',
}, action) => {
    switch (action.type) {
        case INIT_CONFIG:
            return {
                ...state,
                fontSize: +localStorage.getItem('FONT_SIZE') || 24,
                lineHeight: +localStorage.getItem('LINE_HEIFHT') || 1.6,
                background: localStorage.getItem('BACKGROUND') || '#FFF',
                color: localStorage.getItem('COLOR') || '#000',
            }
        case CHANGE_FONT_SIZE:
            localStorage.setItem('FONT_SIZE', action.value)
            return {
                ...state,
                fontSize: action.value,
            }
        case CHANGE_LINE_HEIFHT:
            localStorage.setItem('LINE_HEIFHT', action.value)
            return {
                ...state,
                lineHeight: action.value,
            }
        case CHAGNE_THEME:
            localStorage.setItem('BACKGROUND', action.background)
            localStorage.setItem('COLOR', action.color)
            return {
                ...state,
                background: action.background,
                color: action.color,
            }
        default:
            return state
    }
}
