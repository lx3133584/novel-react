import http from './config.js';
export function search (keyword, pageNo) {
    return http.get('search', {params: {keyword, page_no: pageNo}})
}
export function detail (category, ids) {
    return http.get(`detail/${category}/${ids}`)
}
