import http from './config.js';
export function search (keyword, pageNo) {
    return http.get('novels/search/bqk', {params: {name: keyword, page_no: pageNo}})
}
export function detail (category, ids) {
    return http.get(`detail/${category}/${ids}`)
}
export function content (category, ids, id) {
    return http.get(`content/${category}/${ids}`, {params: {id}})
}
export function list (category, ids, id) {
    return http.get(`list/${category}/${ids}`)
}
