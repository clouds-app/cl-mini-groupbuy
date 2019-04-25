import { goodsListByPages, goodsListByType, goodsDetailById, goodsTypeList } from '@/api/goods'
const serverBusyTips = "服务繁忙，请稍后再试！"

export default {
  state: {
    goodsListByPages_state:{},
    goodsListByType_state:{},
    goodsDetailById_state:{},
    goodsTypeList_state:{},
  },
  getters: {
    getGoodsListByPages:state => state.goodsListByPages_state,
    getGoodsListByType:state => state.goodsListByType_state,
    getGoodsDetailById:state => state.goodsDetailById_state,
    getGoodsTypeList:state => state.goodsTypeList_state,
  },
  mutations: {
    setGoodsListByPages (state, data) {
      state.goodsListByPages_state = data
    },
    setGoodsListByType (state, data) {
      state.goodsListByType_state = data
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
