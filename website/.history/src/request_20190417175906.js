import axios from 'axios'
//引入element ui 里面的loading以及message组件
import {
    Loading,
    Message
} from 'element-ui';
//超时时间
axios.defaults.timeout = 5000;


//http请求拦截器
let loading;
axios.interceptors.request.use((config) => {
    // 接口请求可在此处统一处理
    loading = Loading.service({
        fullscreen: true
    })
    return config
}, (err) => {
    loading.close()
    Message.error({
        message: '加载超时'
    })
    // 接口请求出错可在此处统一处理
    return Promise.reject(err)
})


//拦截器
axios.interceptors.response.use((data) => {
    // 数据统一校验处理
    loading.close();
    return data
}, (err) => {
    loading.close();
    // 数据异常统一处理 例如 err.response.status === 404 --->服务器爆了  err.response.status === 403  --->  权限不足……
    return Promise.reject(err)
})

//post方法
export function postRequest(url, params) {
    return axios({
        method: 'post',
        url: '/api/' + url,
        data: params,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    })
}

//get方法
export function getRequest(url) {
    return axios({
        method: 'get',
        url: '/api/' + url
    })
}

//uploadFile方法
export function uploadFileRequest(url, params) {
    return axios({
        method: 'post',
        url: '/api/' + url,
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

//put方法
export function putRequest(url, params) {
    return axios({
        method: 'put',
        url: '/api/' + url,
        data: params,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

//delete方法
export function deleteRequest(url) {
    return axios({
        method: 'delete',
        url: '/api/' + url
    })
}