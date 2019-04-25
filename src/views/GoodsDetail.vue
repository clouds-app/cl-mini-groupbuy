<template>
    <div>
         <back-arrow title="商品详细"/>
        
        <van-swipe  indicator-color="white">
              <van-swipe-item
                v-for="(image, index) in images"
                :key="index"
            >
            <img width="400" height="200" v-lazy="image">
          </van-swipe-item>
         </van-swipe>
         <div>
         <van-cell-group>
            <van-cell title="商品名称:" :value="goodsItem.goodsName" />
           
            <van-panel title="销售价格"  :status="goodsItem.goodsPrice | formatRMBData"/>

            <!-- <van-panel title="简要描述：" desc="可以单独使用，也可以与CellGroup搭配使用。CellGroup可以为Cell提供上下外边框。" >
            </van-panel> -->
           <van-cell title="商品规格:" :value="goodsItem.goodsSpec" />
            <van-cell title="送货区域:" :value="goodsItem.deliveryArea" />
        </van-cell-group>


       <van-collapse v-model="activeNames">
            <van-collapse-item title="商品详细" name="1">
              {{goodsItem.goodsDesc}}
            </van-collapse-item>
         
     </van-collapse>
         </div>

         <div class="sku-container">
        <van-sku
          ref='goodsSkuData'
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          reset-stepper-on-hide
          reset-selected-sku-on-hide
          disable-stepper-input
          :close-on-click-overlay="closeOnClickOverlay"
          :custom-sku-validator="customSkuValidator"
          @buy-clicked="onBuyClicked"
          :show-add-cart-btn="false"
          :message-config="messageConfig"
        >
         <!-- 自定义 sku actions -->
        <template slot="sku-actions" slot-scope="props">
            <div class="van-sku-actions">
            <!-- <van-button bottom-action @click="onPointClicked">积分兑换</van-button> -->
            <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
            <van-button type="primary" bottom-action @click="props.skuEventBus.$emit('sku:buy')">确认下单</van-button>
            </div>
        </template>
        <template slot="sku-header">
             <div class="van-sku-header van-hairline--bottom">
               <div class="van-sku-header__img-wrap">
                   <img src=""></div>
                   <div class="van-sku-header__goods-info">
                       <div class="van-sku__goods-name van-ellipsis">{{goodsItem.goodsName}}</div>
                       <div class="van-sku__goods-price">
                           <span class="van-sku__price-symbol">￥</span>
                           <span class="van-sku__price-num">{{goodsItem.goodsPrice}}</span>
                           </div>
                           <i @click="handleClose" class="van-icon van-icon-close van-sku__close-icon"></i></div>
                        </div>
        </template>
        <!-- <template slot="extra-sku-group">
            <button>wwddddww</button>
        </template> -->
        </van-sku>
        </div>
         
      <van-goods-action>
        <van-goods-action-mini-btn
          icon="wap-home"
          text="首 页"
          @click="goHome"
        />
        <van-goods-action-mini-btn
          icon="chat"
          text="分 类"
          @click="onClickCart"
        />
         <van-goods-action-mini-btn
          icon="contact"
          text="我的"
          @click="onClickCart"
        />
        <van-goods-action-big-btn
          primary
          text="立即购买"
          @click="purchase"
        />
      </van-goods-action>
    </div>
</template>
<script>
import skuData from '@/mock/skuData';
import {mapGetters} from 'vuex'
import BackArrow from '_c/back-arrow'
export default {
    name:'goods-detail',
    data(){
        this.skuData = skuData;
        return {
            customSkuValidator: () => '请选择规格',
            showBase: false,
            closeOnClickOverlay: true,
            activeNames: ['1'],
            goodsId:this.$route.query.id,
            goodsList:{},
            goodsItem:{},
            current: 0,
            images: [
            'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
            'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
            'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
            'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
        ],
        messageConfig: {
        placeholderMap: {
            xianggo: '请输入箱高',
            poNum:'请输入PO号',
            zhiZhi:'请输入纸质',
            lengBie:'请输入楞别',
            zhiLength:'请输入纸长(mm)',
            zhiWide:'请输入纸宽(mm)',
            yaxian:'请输入压线,格式为0+0+0+0+0',
            yaxianType:'请输入压线类型',

        }
      }
        }
    },
    components:{BackArrow},
    computed:{
       //...mapGetters(['getGoodsListByPages']) //可以使用this.getGoodsListByPages 获取数据
    },
    filters:{
         formatRMBData(data){
             return `¥：${data} 元`;
         }
                    
    },
    methods:{
        handleClose(){
              this.showBase=false
        },
        goHome(){
             this.$router.push({ name: "home" });
        },
        onBuyClicked(){
           // alert(1111);
          console.warn(this.$refs.goodsSkuData.getSkuData()) 
        },
        onClickCart(){},
        addShops(){},
        purchase(){
            
            this.showBase=true
        },
        onChange(){},
        //从产品列表中过滤 选择产品
        getGoodsItem(){
         let _self=this;
        this.goodsList =Object.assign({},this.$store.getters.getGoodsListByPages)
        //console.log(Array.from(this.goodsList.records))
        let currentGoodsItem =Array.from(this.goodsList.records).filter((item)=>{
            return item.id1 ==_self.goodsId;
        })
        this.goodsItem =currentGoodsItem[0];

        //console.log(Array.from(this.goodsItem))
        }
        
    },
    created(){
        this.getGoodsItem()
    },
    mounted(){
              this.$nextTick(()=>{
                
            });
    }

    
}
</script>

<style scoped>
    .van-button--bottom-action.van-button--primary {
        background-color:#07c160;
    }
  .van-cell{
    text-align: left;
  }
  .sku-container {
      text-align: left;
    padding: 0 15px;
  }
</style>

