import axios from 'axios'

export function request(config) {
    // console.log('axios111');

    const instance = axios.create({
            /* 1创建axios实例 */
            // baseURL: 'http://192.168.3.196:8888',
            // baseURL: '//localhost:8081',
            timeout: 5000
        })
        /* 2axios的拦截器 */
        //2.1请求拦截的作用
        // instance.interceptors.request.use(config => {
        //     return config
        // }, err => {
        //     console.log(err);
        // })

    // //2.2响应拦截
    // instance.interceptors.request.use(res => {
    //     return res.data
    // }, err => {
    //     console.log(err);
    // })
    // console.log(config);

    return instance(config)
}