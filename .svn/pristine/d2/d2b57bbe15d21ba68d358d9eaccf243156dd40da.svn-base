import { addressList, addressSave,addressUpdate, addressDelete,addressDetail } from '@/api/address'
const serverBusyTips="服务繁忙，请稍后再试！"

export default {
    state: {
     
    },
    mutations: {
     
    },
    actions: {
      //获取用户地址列表
      getAddressList({ commit }, {userId}){
        //debugger
        return new Promise((resolve, reject) => {
          addressList({
            userId
          }).then(res => {
            let data = res.data
            if(data.success)
            {
              resolve()
            }
            else
            {
              reject(data.msg)
            }
           
          }).catch(err => {
            console.error(err)
            reject(serverBusyTips)
          })
        })
      },
      //=========================
       //用户地址保存
       setAddressSave({ commit }, {userId}){
        //debugger
        return new Promise((resolve, reject) => {
           addressSave({
            userId
          }).then(res => {
            let data = res.data
            if(data.success)
            {
              resolve()
            }
            else
            {
              reject(data.msg)
            }
           
          }).catch(err => {
            console.error(err)
            reject(serverBusyTips)
          })
        })
      },
      //=========================
       //用户地址更新
       setAddressUpdate({ commit }, {userId}){
        //debugger
        return new Promise((resolve, reject) => {
           addressUpdate({
            userId
          }).then(res => {
            let data = res.data
            if(data.success)
            {
              resolve()
            }
            else
            {
              reject(data.msg)
            }
           
          }).catch(err => {
            console.error(err)
            reject(serverBusyTips)
          })
        })
      },
      //=========================
       //删除用户收货地址
       setAddressUpdate({ commit }, {userId,addressId }){
        //debugger
        return new Promise((resolve, reject) => {
            addressDelete({
            userId,addressId 
          }).then(res => {
            let data = res.data
            if(data.success)
            {
              resolve()
            }
            else
            {
              reject(data.msg)
            }
           
          }).catch(err => {
            console.error(err)
            reject(serverBusyTips)
          })
        })
      },
      //=========================
       //获取地址详情
       getAddressDetail({ commit }, {userId,addressId }){
        //debugger
        return new Promise((resolve, reject) => {
            addressDetail({
            userId,addressId 
          }).then(res => {
            let data = res.data
            if(data.success)
            {
              resolve()
            }
            else
            {
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
  