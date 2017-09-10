import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.0.144:3001/api/';
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
    return Promise.reject(error.response && error.response.data)
}

axios.interceptors.request.use(interceptorsRequestSuccess, interceptorsRequestError)
axios.interceptors.response.use(interceptorsResponseSuccess, interceptorsResponseError)
  
export default axios
