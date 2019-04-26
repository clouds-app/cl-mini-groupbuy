import axios from '@/libs/api.request'
import Qs from 'qs'

/**
* @description 正在抢购商品
* @params {  }
* @url clerp-shop-admin/api/rush/list/now
*/
export const rushListNow = () => {
    //debugger
    //参数
    const data = {
      //userId
    }
    return axios.request({
      url: '/api/rush/list/now',
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }

  /**
* @description 即将抢购商品
* @params {  }
* @url clerp-shop-admin/api/rush/list/after
*/
export const rushListAfter = () => {
    //debugger
    //参数
    const data = {
      //userId
    }
    return axios.request({
      url: `/api/rush/list/after`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }