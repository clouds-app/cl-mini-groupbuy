import { goodsListByPages, goodsListByType, goodsDetailById, goodsTypeList } from '@/api/goods'
const serverBusyTips = "服务繁忙，请稍后再试！"

export default {
  state: {
    goodsListByPages_state:{},
    goodsListByPages_pageSetting_state:{
      total:0,//总数量
      size:0,//每页显示条数
      current:0,//当前页数
      pages:0 ////总页数
    },
    goodsListByType_state:{},
    goodsDetailById_state:{},
    goodsTypeList_state:{},
    goodsTypeList_pageSetting_state:{
      total:0,//总数量
      size:0,//每页显示条数
      current:0,//当前页数
      pages:0 ////总页数
    },
  },
  getters: {
    getGoodsListByPages:state => state.goodsListByPages_state,
    getGoodsListByPages_pageSetting:state => state.goodsListByPages_pageSetting_state,
    getGoodsListByType:state => state.goodsListByType_state,
    getGoodsListByType_pageSetting:state => state.goodsTypeList_pageSetting_state,
    getGoodsDetailById:state => state.goodsDetailById_state,
    getGoodsTypeList:state => state.goodsTypeList_state,
  },
  mutations: {
    setGoodsListByPages (state, data) {
      state.goodsListByPages_state = data
    },
    setGoodsListByPages_pageSetting (state, data) {
      state.goodsListByPages_pageSetting_state = data
    },
    setGoodsListByType (state, data) {
      state.goodsListByType_state = data
    },
    setGoodsListByType_pageSetting (state, data) {
      state.goodsTypeList_pageSetting_state = data
    },
    setGoodsDetailById (state, data) {
      state.goodsDetailById_state = data
    },
    setGoodsTypeList (state, data) {
      state.goodsTypeList_state = data
    },
  },
  actions: {
    /**
    * @description 分页获取商品列表
    * @params { pageNumber, pageSize }
    * @url /clerp-shop-admin/api/goods/list/{pageNumber}/{pageSize}
    */
    getGoodsListByPages({ commit }, { pageNumber, pageSize }) {
      //debugger
      return new Promise((resolve, reject) => {
        goodsListByPages({
          pageNumber, pageSize
        }).then(res => {
          let data = res.data
          if (data.success && parseInt(data.status)!=-1) {
            let formatData=data.data //JSON.stringify(data.data);
            commit('setGoodsListByPages', formatData)
            
            let pageSetting ={
              total:data.data.total,//总数量
              size:data.data.size,//每页显示条数
              current:data.data.current,//当前页数
              pages:data.data.pages ////总页数
            }
            commit('setGoodsListByPages_pageSetting', pageSetting)
            resolve(formatData)
          }
          else {
            reject(data.msg)
          }

        }).catch(err => {
          console.error(err)
          reject(serverBusyTips)
        })
      })
    },
    /**
    * @description 根据商品类型分页获取商品列表
    * @params { goodsType,pageNumber, pageSize  }
    * @url /clerp-shop-admin/api/goods/list/{goodsType}/{pageNumber}/{pageSize}
    */
    getGoodsListByType({ commit }, { goodsType, pageNumber, pageSize }) {
      //debugger
      return new Promise((resolve, reject) => {
        goodsListByType({
          goodsType, pageNumber, pageSize
        }).then(res => {
          let data = res.data
          if (data.success && parseInt(data.status)!=-1) {
           
            let formatData=data.data //JSON.stringify(data.data);
            commit('setGoodsListByType', formatData)
            //debugger
            let pageSetting ={
              total:data.data.total,//总数量
              size:data.data.size,//每页显示条数
              current:data.data.current,//当前页数
              pages:data.data.pages ////总页数
            }
            commit('setGoodsListByType_pageSetting', pageSetting)
            resolve(formatData)
          }
          else {
            reject(data.msg)
          }

        }).catch(err => {
          console.error(err)
          reject(serverBusyTips)
        })
      })
    },
    /**
    * @description 根据商品ID获取商品详细信息
    * @params { goodsId }
    * @url /clerp-shop-admin/api/goods/detail/{goodsId}
    */
    getGoodsDetailById({ commit }, { goodsId }) {
      //debugger
      return new Promise((resolve, reject) => {
        goodsDetailById({
          goodsId
        }).then(res => {
          let data = res.data
          if (data.success && parseInt(data.status)!=-1) {
            let formatData=data.data //JSON.stringify(data.data);
            commit('setGoodsDetailById', formatData)
            resolve(formatData)
          }
          else {
            reject(data.msg)
          }

        }).catch(err => {
          console.error(err)
          reject(serverBusyTips)
        })
      })
    },
    /**
    * @description 获取商品类型列表
    * @params {  }
    * @url /clerp-shop-admin/api/goodsType/list
    */
    getGoodsTypeList({ commit }) {
      //debugger
      return new Promise((resolve, reject) => {
        goodsTypeList().then(res => {
          let data = res.data
          if (data.success && parseInt(data.status)!=-1) {
            let formatData=data.data //JSON.stringify(data.data);
            commit('setGoodsTypeList', formatData)
           
            resolve(formatData)
          }
          else {
            reject(data.msg)
          }

        }).catch(err => {
          console.error(err)
          reject(serverBusyTips)
        })
      })
    },
  }
}
