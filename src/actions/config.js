export const INIT_CONFIG = 'INIT_CONFIG';
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';
export const CHANGE_LINE_HEIFHT = 'CHANGE_LINE_HEIFHT';
export const CHAGNE_THEME = 'CHAGNE_THEME';

export const initConfig = () => ({
    type: INIT_CONFIG
})
export const changeFontSize = value => ({
    type: CHANGE_FONT_SIZE,
    value
})
export const changeLineHeight = value => ({
    type: CHANGE_LINE_HEIFHT,
    value
})
export const changeTheme = ({background, color}) => ({
    type: CHAGNE_THEME,
    background,
    color
})
