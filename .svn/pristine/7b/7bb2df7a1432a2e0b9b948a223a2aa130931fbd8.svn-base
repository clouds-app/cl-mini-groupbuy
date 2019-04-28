import {goodsOrderPriceRealTime,submitGoodsOrder} from '@/api/order'
import { rejects } from 'assert';
const serverBusyTips="服务繁忙，请稍后再试！"


export default {
    //属性（使用方法：`this.$stote.state.order.属性`）
    state: {


    },
    //计算属性（使用方法：`this.$store.getters.属性`）
    getters: {

    },
    //同步步方法（使用方法：`this.$store.commit('方法名'，{参数})`）
    mutations: {
        commitGoodsOrderPriceRealTime(state,data){

        },
        commitSubmitGoodsOrder(state,data){

        }
    },
    //异步方法（使用方法：`this.$store.dispatch('方法名'，{参数})`） 
    //缺省参数(rootState,  // 等同于 `store.state`， rootGetters // 等同于 `store.getters`)只存在于模块中 
    actions: {
        /**
        * @description 实时获取订单的真实价格
        * @paramsDesc  商品Id,商品规格Id，纸长，纸宽，数量
        * @params { goodsId,specId,paperLength,paperWidth,paperNum }
        * @url /clerp-shop-admin/api/order/price/{goodsId}
        */
        getGoodsOrderPriceRealTime({state,commit,getters,dispatch},params)
        {
            //debugger
            return new Promise((resolve,reject)=>{
                goodsOrderPriceRealTime(params).then(res=>{
                    let data = res.data
                    if (data.success && parseInt(data.status)!=-1) {
                       let formatData=data.data //JSON.stringify(data.data);
                       commit('commitGoodsOrderPriceRealTime', formatData)
                       resolve(formatData)
                     }
                     else {
                       reject(data.msg)
                     }
                }).catch(err=>{
                    console.error(err)
                    reject(serverBusyTips)
                })
            })
        },
         /**
        * @description 提交订单
        * @paramDesc 规格ID，商品ID，商品规格字符串;使用,分割，纸长，纸宽，数量，箱高，压线，沿线类型，送货备注，生产备注
        * @params { specId, goodsId, goodsSpec,paperLength,paperWidth,paperNum,boxHeight,paperYx,yxType,deliveryRemark,productionRemark}
        * @url /clerp-shop-admin/api/order/buy
        */
        getSubmitgoodsOrder({state,commit,getters,dispatch},params){
           // debugger
             return new Promise((resolve,reject)=>{
                submitGoodsOrder(params).then(res=>{
                    let data = res.data
                    if (data.success && parseInt(data.status)!=-1) {
                       let formatData=data.data //JSON.stringify(data.data);
                       commit('commitSubmitGoodsOrder', formatData)
                       resolve(formatData)
                     }
                     else {
                       reject(data.msg)
                     }
                }).catch(err=>{
                    console.error(err)
                    reject(serverBusyTips)
                })
            })
         
        }

    }
}
