import { request } from "./request"
//get 方式
export function getHomeInfo() {
    return request({
        url: '/api/getIndex.do'
    })

<<<<<<< HEAD
}

// export function getProductList(id) {
//     return request({
//         url: '/api/getProductList.do?Id=1'
//     })
// }

=======


}

// export function getProductList(id) {
//     return request({
//         url: '/api/getProductList.do?Id=1'
//     })
// }

>>>>>>> 382311cb0f00308694e00261f2b7944d188f684a
// // post方式
// export function getDetail(id) {
//     return request({
//         url: '/api/proDetails.do',
//         data: { id: id },
//         method: 'post'
//     })

<<<<<<< HEAD
// }
=======
// }
export function getProductList() {
    return request({
        url: '/api/getProductList.do',
        data: { PageCount: 100, CurrentPage: 1, Key: '', P_Type_Menu_Id: 2 },
        method: 'post'
    })
}
>>>>>>> 382311cb0f00308694e00261f2b7944d188f684a
