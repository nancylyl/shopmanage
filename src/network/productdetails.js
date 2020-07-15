import { request } from "./request"

  
        export function getProductDetail(id) {
      
            return request({
                url: '/api/getProductDetail.do?Pro_Id='+id //产品详情
        
            })
        }
   
