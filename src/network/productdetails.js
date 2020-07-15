import { request } from "./request"

  
        export function getProductDetail(id) {
            let proid = id
            return request({
                url: '/api/getProductDetail.do?Pro_Id=16' //产品详情
        
            })
        }
   
