import http from './config.js';
export function search (keyword, pageNo) {
    return http.get('novels/search/bqk', {params: {name: keyword, page_no: pageNo}})
}
export function detail (id, name, url) {
    return http.post(`novels/acquire`, {id, name, url})
}
export function content (id, num) {
    return http.post(`chapters`, {id, num})
}
export function list (id) {
    return http.get(`novels/directory/${id}`)
}
