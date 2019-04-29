import axios from '@/libs/api.request'
import Qs from 'qs'

/**
* @description 获取广告列表
* @params { adLocation }
http://192.168.168.111:8081/clerp-shop-admin/api/system/ad/list/{adLocation}
*/
export const adList = ({ adLocation}) => {
  //debugger
  //参数
  const data = {
    //userId
  }
  return axios.request({
    url: `/api/system/ad/list/${adLocation}`,
    data,
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
    }],
  })
}
