import { request } from "./request"

export function getUserInfo(id) {
    return request({
        url: '/api/getUserInfo.do'
    })
}
export function updataUserInfo(data) {
    return request({
        url: '/api/updataUserInfo.do',
        data: data,
        method: 'post'
    })
}