import axios from '@/libs/api.request'
import Qs from 'qs'

/**
* @description 分页获取商品列表
* @params { pageNumber, pageSize }
* @url /clerp-shop-admin/api/goods/list/{pageNumber}/{pageSize}
*/
export const goodsListByPages = ({ pageNumber, pageSize }) => {
  //debugger
  //参数
  const data = {
    // pageNumber,
    // pageSize
  }
  return axios.request({
    url:   `api/goods/list/${pageNumber}/${pageSize}`,
    data,
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
    }],
  })
}

/**
* @description 根据商品类型分页获取商品列表
* @params { goodsType,pageNumber, pageSize  }
* @url /clerp-shop-admin/api/goods/list/{goodsType}/{pageNumber}/{pageSize}
*/

export const goodsListByType = ({ goodsType,pageNumber, pageSize }) => {
    //debugger
    //参数
    const data = {
      //goodsType,
      // pageNumber, 
      // pageSize
    }
    return axios.request({
      url:   `api/goods/list/${goodsType}/${pageNumber}/${pageSize}`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }


/**
* @description 根据商品ID获取商品详细信息
* @params { goodsId }
* @url /clerp-shop-admin/api/goods/detail/{goodsId}
*/
export const goodsDetailById = ({ goodsId }) => {
    //debugger
    //参数
    const data = {
      // goodsId
    }
    return axios.request({
      url:   `api/goods/list/${goodsType}/${pageNumber}/${pageSize}`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }


/**
* @description 获取商品类型列表
* @params {  }
* @url /clerp-shop-admin/api/goodsType/list
*/
export const goodsTypeList = () => {
    //debugger
    //参数
    const data = {
      // 
    }
    return axios.request({
      url:   `api/goodsType/list`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }