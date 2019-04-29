import axios from '@/libs/api.request'
import Qs from 'qs'

/**
* @description 获取公告列表
* @params { userId }
http://192.168.168.111:8081/clerp-shop-admin/api/system/note/list/{pageNumber}/{pageSize}
*/
export const noteList = ({ pageNumber,pageSize }) => {
  //debugger
  //参数
  const data = {
    //userId
  }
  return axios.request({
    url: `/api/system/note/list/${pageNumber}/${pageSize}`,
    data,
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
    }],
  })
}

/**
 * http://192.168.168.111:8081/clerp-shop-admin/api/system/note/detail/{id}
 */
export const noteDetail = ({ id }) => {
  //debugger
  //参数
  const data = {
    //userId
  }
  return axios.request({
    url: `/api/system/note/detail/${id}`,
    data,
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
    }],
  })
}
