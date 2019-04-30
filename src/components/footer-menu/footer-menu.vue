<template>
     <van-tabbar  v-model="active" style="background:#f8f8f9">
      <van-tabbar-item  icon="wap-home" to="/home">首页</van-tabbar-item>
      <!-- <van-tabbar-item icon="chat" to="/classify">分类</van-tabbar-item> -->
      <!-- <van-tabbar-item icon="logistics" to="/shopingCart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/usercenter">我的</van-tabbar-item> -->
       <!-- <van-tabbar-item icon="chat" to="/login">登陆</van-tabbar-item>
       <van-tabbar-item icon="chat" to="/register">注册</van-tabbar-item>-->
       <!-- <van-tabbar-item icon="new-arrival-o" to="/goodslist">商品</van-tabbar-item> -->
       <van-tabbar-item icon="wap-nav" to="/category">分类</van-tabbar-item>
       <van-tabbar-item icon="logistics" to="/flashsale" >抢购</van-tabbar-item> 
       <van-tabbar-item icon="contact" to="/usercenter">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
export default {
    name:'foote-menu',
    data(){
        return {
                active:0,
        }
    },
    watch:{
      "$route":"fetchData"
    },
    methods:{
        fetchData(){
           // console.warn('this.$route.name'+this.$route.name)
            if(this.$route.name=='main')
            {
                 
            }
            else if(this.$route.name=='category')
            {
               
            }
            else if(this.$route.name=='usercenter')
            {
            
            }
             else if(this.$route.name=='flashsale')
            {
               
            }
        }
    },
    mounted()
    {
        //console.warn(this.$router)
    }

}
</script>