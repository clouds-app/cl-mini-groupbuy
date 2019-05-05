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
            <img width="400" height="200" :src="imgUrlFilter(image.adverImg)">
          </van-swipe-item>
        </van-swipe>
      </van-row>
      <van-row style="margin:10px,0px">
				<van-notice-bar v-for="(item,index) in noteList" :key="index" :text="item.noteTitle"
					left-icon="volume-o" scrollable
				/>
      </van-row>

     <div class="aui-palace">
		   信息列表
		</div>
		<van-row>
				<van-col span="12" v-for="(item,index) in navImages" :key="index">
					<img :src="imgUrlFilter(item.adverImg)"/>
				</van-col>
		</van-row>
   </div>
</template>

<script>
import CountDown from 'vue2-countdown'
import common from '@/views/mixins/common.js';
export default {
  name: 'home',
  data() {
    return {
      current: 0,
      images: [],
			navImages:[],
			noteList:[]
    };
  },
	mixins: [common],
  components: {
		CountDown
  },
	mounted:function(){
    //console.warn("this.$route.params"+JSON.stringify(this.$route.params))
		this.loadNoteList();
		this.loadAdList('homeSwipe',(data)=>{
			this.images = data;
		});
		this.loadAdList('homeNav',(data)=>{
			this.navImages = data;
		});
	},
  methods:{
			imgUrlFilter(value){
				return   this.$config.baseImgUrl + value;
			},
      loadNoteList(){
				let params = {
					pageNumber : 1,
					pageSize:1
				}
				this.$store.dispatch("getNoteList", params).then((res) => {
					if (res.success) {
						this.noteList = res.data.records;
					}
				}).catch((msg) => {
					this.showErrorNotify(msg);
				});
			},
			loadAdList(adLocation,callback){
				let params = {
					adLocation : adLocation
				}
				this.$store.dispatch("getAdList", params).then((res) => {
					if (res.success) {
							callback(res.data);
					}
				}).catch((msg) => {
					this.showErrorNotify(msg);
				});
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
