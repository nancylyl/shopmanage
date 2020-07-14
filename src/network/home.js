import { request } from "./request"
//get 方式
export function getHomeInfo() {
    return request({
        url: '/api/getIndex.do'
    })

}

export function getList(id) {
    return request({
        url: '/api/getProductList.do'
    })
}
// // post方式
// export function getDetail(id) {
//     return request({
//         url: '/api/proDetails.do',
//         data: { id: id },
//         method: 'post'
//     })
// }
export function getProductList() {
    return request({
        url: '/api/getProductList.do',

        //   data: { PageCount: 100, CurrentPage: 1, key: '张三' },

        data: { PageCount: 100, CurrentPage: 1, Key: '', P_Type_Menu_Id: 2 },

        method: 'post'
    })
}