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
// export function baoCunNew(data) {//个人资料保存
//   return request({
//     url: '/api/updataUserInfo.do',
//     data:data,
//     method:'post'
// })
// }
export function getMyOder(id) {//获取我的订单用户信息
  return request({
    url: '/api/getMyOder.do'
  })
}
export function getComment(id) {//获取我的订单用户信息
  return request({
    url: '/api/getComment.do'
  })
}
export function updataPass(data) {//获取我的订单用户信息
  return request({
    url: '/api/updataPass.do',
    data:data,
    method:'post'
  })
}export function addMyAddress(data) {//保存我的订单用户信息
  return request({
    url: '/api/addMyAddress.do',
    data:data,
    method:'post'
  })
}

export function getMyAddress() {//获取我的订单用户信息
  return request({
    url: '/api/getMyAddress.do',

  })
}
