import { request } from "./request"
//get 方式
export function getHomeInfo() {
    return request({
        url: '/api/getProductDetail.do?Id=1'
    })
}

export function getProductList(id) {
    return request({
        url: '/api/getProductList.do?Id=1'
    })
}

// post方式
export function getDetail(id) {
    return request({
        url: '/api/proDetails.do',
        data: { id: id },
        method: 'post'
    })

}