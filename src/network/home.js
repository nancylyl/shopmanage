import { request } from "./request"
//get 方式
export function getHomeInfo() {
    return request({
        url: '/api/getIndex.do'
    })

}

<<<<<<< HEAD
export function getList(id) {

=======
export function getList(data) {
    console.log("=======11111111111111111111111=======")
    console.log(data)
>>>>>>> 06c32c71cf62fbe6b0e696e7327c15c4276d8e8c
    return request({
        url: '/api/getProductList.do',
        data: data,
        method: 'post'
    })
}
<<<<<<< HEAD


//商品详情
export function getProductDetail(id) {
    return request({
        url: '/api/getProductDetail.do?Pro_Id=1' //产品详情

    })
}
//用户信息
export function getUserInfo(id) {
    return request({
        // url: '/api/getProductDetail.do?Pro_Id=1'//产品详情
        url: '/api/getUserInfo' //用户信息
    })
}
// 商品类别
export function getProductList() {
    return request({
        url: '/api/getProductList.do',
        data: { PageCount: 100, CurrentPage: 1, Key: '', P_Type_Menu_Id: 2 },
        method: 'post'
    })
}
//登录

export function login(data) {

    return request({
        url: '/api/login.do',
        data: { Account: 'admin', Password: '12234567' },
        method: 'post'
    })
}


export function register() {
    console.log('333');
    return request({
        url: '/api/register.do',
        data: { Phone: 'adm3333in', Password: '33' },
        method: 'post'
    })
}
=======
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

//         data: { PageCount: 100, CurrentPage: 1, key: '张三' },

//   data: { PageCount: 100, CurrentPage: 1, key: '张三' },

//         data: { PageCount: 100, CurrentPage: 1, Key: '', P_Type_Menu_Id: 2 },

//         method: 'post'
//     })
// }
>>>>>>> 06c32c71cf62fbe6b0e696e7327c15c4276d8e8c
