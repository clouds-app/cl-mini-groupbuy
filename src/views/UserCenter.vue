<template>
  <div>
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <!-- <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link /> -->
      <van-cell icon="location-o" title="我的地址" is-link @click="HandleRedirect('addresslist')" />
    </van-cell-group>

    <van-cell-group class="user-group">
      <van-cell icon="warn-o" title="退出" is-link @click="logOut" />
    </van-cell-group>
  </div>
</template>

<script>
import common_mix from './mixins/common.js'
import {getCookie} from '@/libs/util'
export default {
  name: 'user-center',
  data(){
    return {
      isLogOut:true
    }
  },
  mixins:[common_mix],
  components: {
  },
  created(){
    this.checkLogin()
  },
  methods:{

     checkLogin(){
        if(getCookie('userName')=="")
        {
          this.$router.push({
            name: 'login'
          });
          
        }
      },
      logOut(){
       this.$dialog.confirm({
        title: '提示',
        message: '确认退出登录吗？'
       }).then(()=>{
          this.$store.dispatch('handleLogOut').then(()=>{
                this.$router.push({
                    name: 'home'
                  });
          })
       }).catch(()=>{

       })
      }
      
  }
}
</script>

<style lang="less">
//text-align: left;
.van-cell{
  text-align: left;
}
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
