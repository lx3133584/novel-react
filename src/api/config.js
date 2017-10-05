import axios from 'axios';
import { Toast } from 'antd-mobile';
import { store } from '../App';
import { removeToken } from '../actions';

axios.defaults.baseURL = `http://localhost:5000`;
// axios.defaults.baseURL = `http://api.0lx.top/`;

function interceptorsRequestSuccess (config) {
    config.headers.Authorization = store.getState().token.token
    return config
}

function interceptorsRequestError (error) {
    return Promise.reject(error)
}

function interceptorsResponseSuccess (response) {
    return Promise.resolve(response.data)
}

function interceptorsResponseError (error) {
    if (error.response.status === 401) {
        localStorage.removeItem('TOKEN');
        store.dispatch(removeToken());
        const MSG = '请登陆后再试'
        Toast.info(MSG, 1);
        return Promise.reject(MSG) 
    }
    Toast.info(error.response && error.response.data && error.response.data.error, 1);
    return Promise.reject(error.response && error.response.data)
}

axios.interceptors.request.use(interceptorsRequestSuccess, interceptorsRequestError)
axios.interceptors.response.use(interceptorsResponseSuccess, interceptorsResponseError)
  
export default axios
