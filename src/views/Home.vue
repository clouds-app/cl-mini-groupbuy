<template>
   <div >
      <van-row type="flex" justify="center" style="margin-top:10px;margin-buttom:10px;">
        <van-col span="2"></van-col>
        <van-col span="20"><h4>晨龙包装自动化有限公司</h4></van-col>
        <van-col span="2"></van-col>
      </van-row>
       <van-row type="flex" justify="center" >
         <van-swipe :autoplay="3000" :width="400" :height="200">
          <van-swipe-item
            v-for="(image, index) in images"
            :key="index"
          >
            <img width="400" height="200" v-lazy="image">
          </van-swipe-item>
        </van-swipe>
      </van-row>
      <van-row style="margin:10px,0px">
          <van-notice-bar
            text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。 "
          left-icon="volume-o"
        />
      </van-row>

     <div class="aui-palace">
		   信息列表
		</div>
   </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      current: 0,
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ]
    };
  },
  components: {
  },
  methods:{
      handProxy(){
        
      }
  }
}
</script>

<style lang="less" scoped>

.aui-palace {
    padding: 5,0;
    position: relative;
    overflow: hidden;
}


.controlPanel{
  height: 20px;
  text-align: center;
}
@import '../assets/style/var';
.demo-swipe {
  padding-bottom: 30px;
  .van-swipe {
    cursor: pointer;
    &-item {
      color: @white;
      font-size: 20px;
      text-align: center;
      line-height: 150px;
      &:nth-child(even) {
        background-color: #39a9ed;
      }
      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }
    img {
      width: 100%;
      height: 240px;
      display: block;
      padding: 30px 60px;
      box-sizing: border-box;
      background-color: @white;
      pointer-events: none;
    }
  }
  &--vertical {
    height: 200px;
    .van-swipe-item {
      line-height: 200px;
    }
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: @white;
    background: rgba(0, 0, 0, .1);
  }
}
</style>
