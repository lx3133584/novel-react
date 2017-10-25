import { INIT_CONFIG, CHANGE_FONT_SIZE, CHANGE_LINE_HEIFHT, CHAGNE_THEME } from '../actions';

// import skin from '../assets/images/skin-default.jpg';
import skinT from '../assets/images/skin-default-t.jpg';
import skinB from '../assets/images/skin-default-b.jpg';
import skinM from '../assets/images/skin-default-m.jpg';
// import skinS from '../assets/images/skin-default-s.png';
export default (state = {
    fontSize: 5,
    lineHeight: 1.6,
    background: `url(${skinT}) no-repeat center top,url(${skinB}) no-repeat center bottom,url(${skinM}) repeat-y center 1.586666rem`,
    color: '#000',
}, action) => {
    switch (action.type) {
        case INIT_CONFIG:
            return {
                ...state,
                fontSize: +localStorage.getItem('FONT_SIZE') || 5,
                lineHeight: +localStorage.getItem('LINE_HEIFHT') || 1.6,
                background: localStorage.getItem('BACKGROUND') || `url(${skinT}) no-repeat center top,url(${skinB}) no-repeat center bottom,url(${skinM}) repeat-y center 1.586666rem`,
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
