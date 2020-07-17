import { request } from "./request";

export function login(data) {
    // let username =document.getElementById("theName").value;
    // let pwd =document.getElementById("thePwd").value;
    // console.log()
    // console.log(pwd);
    console.log('3333333333333333333')
    return request({
        url: '/api/login.do',
        data: data,
        method: 'post',

    })
}