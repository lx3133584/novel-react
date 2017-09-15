import axios from 'axios';
import { Toast } from 'antd-mobile';
axios.defaults.baseURL = `http://${window.location.hostname}:3001/api/`;
function interceptorsRequestSuccess (config) {
    return config
}

function interceptorsRequestError (error) {
    return Promise.reject(error)
}

function interceptorsResponseSuccess (response) {
    return Promise.resolve(response.data)
}

function interceptorsResponseError (error) {
    Toast.info(error.response && error.response.data && error.response.data.message, 1);
    return Promise.reject(error.response && error.response.data)
}

axios.interceptors.request.use(interceptorsRequestSuccess, interceptorsRequestError)
axios.interceptors.response.use(interceptorsResponseSuccess, interceptorsResponseError)
  
export default axios
