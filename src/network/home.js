import { request } from "./request"
//get 方式
export function getHomeInfo() {
    return request({
        url: '/api/getIndex.do'
    })

}
<<<<<<< HEAD
export function getList(data) {
=======

export function getList(id) {
>>>>>>> 142ed5ce550b78894701f94472384a0458b7d789
    return request({
        url: '/api/getProductList.do',
        data: data,
        method: 'post'
    })
}
<<<<<<< HEAD

=======
>>>>>>> 142ed5ce550b78894701f94472384a0458b7d789
// // post方式
// export function getDetail(id) {
//     return request({
//         url: '/api/proDetails.do',
//         data: { id: id },
//         method: 'post'
//     })
// }
// export function getProductList() {
//     return request({
//         url: '/api/getProductList.do',

<<<<<<< HEAD
//         data: { PageCount: 100, CurrentPage: 1, key: '张三' },
=======
        //   data: { PageCount: 100, CurrentPage: 1, key: '张三' },
>>>>>>> 142ed5ce550b78894701f94472384a0458b7d789

//         data: { PageCount: 100, CurrentPage: 1, Key: '', P_Type_Menu_Id: 2 },

//         method: 'post'
//     })
// }