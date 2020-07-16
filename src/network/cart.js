import { request } from "./request"


export function getcartlist() {

    //console.log(data)
    return request({
        url: '/api/getPayBy.do',

    })
}