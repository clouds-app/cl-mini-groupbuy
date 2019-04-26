import { rushListNow,rushListAfter } from '@/api/rush'
const serverBusyTips="服务繁忙，请稍后再试！"

export default {
    //属性=》使用方法 this.$store.state.rush.属性
    state: {
        rushListNow_state:[],
        rushListAfter_state:[]
     
    },
    //计算属性=》使用方法 this.$store.getters.属性
    getters:{
        
        getRushListNow:(state)=>state.rushListNow_state,
        getRushListAfter:state=>state.rushListAfter_state
    },
    //同步方法 使用方法 this.$store.commit('setRushListNow',{参数})
    mutations: {
        setRushListNow(state,data){
          //debugger
           state.rushListNow_state=data;
        },
        setRushListAfter(state,data){
            state.rushListAfter_state =data;
        }
    },
    //异步方法 : 使用方法 this.$store.dispatch("getRushListNow",{参数})
    actions: {
      //获取正在抢购商品列表
      getRushListNow({commit,state,dispatch},payload){
        //debugger
        return new Promise((resolve, reject) => {
            rushListNow().then(res => {
            let data = res.data
             if (data.success && parseInt(data.status)!=-1) {
                let formatData=data.data //JSON.stringify(data.data);
                commit('setRushListNow', formatData)
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
       //获取即将抢购商品列表
       getRushListAfter({commit,state,dispatch},payload){
        //debugger
        return new Promise((resolve, reject) => {
            rushListAfter().then(res => {
            let data = res.data
            if (data.success && parseInt(data.status)!=-1) {
                let formatData=data.data //JSON.stringify(data.data);
                commit('setRushListAfter', formatData)
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
  