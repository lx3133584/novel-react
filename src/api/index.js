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
export function getRank () {
    return http.get(`novels/rank`)
}
export function register (user) {
    return http.post(`user/register`, user)
}
export function login (account, password) {
    return http.post(`user/login`, {account, password})
}
export function getInfo () {
    return http.get(`user`)
}
export function editName (name) {
    return http.post(`user/edit_name`, {name})
}
export function getBookshelf () {
    return http.get(`bookshelf`)
}
export function addBook (id) {
    return http.post(`bookshelf/order`, {id})
}
export function removeBook (id) {
    return http.post(`bookshelf/delete`, {id})
}
export function fetchUpdateProgress (id, num) {
    return http.post(`chapters/progress`, {id, num})
}
