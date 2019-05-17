import axios from '@/libs/api.request'
import Qs from 'qs'

/**
* @description 获取sessionID
* @Url  clerp-shop-admin/api/auth/getSessionId
*/
export const getSessionId = () => {
  //debugger
  //参数
  const data = {
    //userId
  }
  return axios.request({
    url: `api/auth/getSessionId`,
    data,
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
    }],
  })
}