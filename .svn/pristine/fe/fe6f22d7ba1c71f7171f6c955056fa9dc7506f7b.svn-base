<template>
    <div>
         <!-- origin-price="10.00"  num="2" -->
        <van-card v-for="goods in dataSource" :key="goods.id1"
        :price="goods.goodsPrice"
        :tag="ProductTag"
        :desc="goods.goodsDesc"
        :title="goods.goodsName"
        :thumb="imageURL"
        @click="handleGoodsDetail(goods)"
      >
        <!-- <div slot="tags" class="card__tags">
          <van-tag plain type="danger">标签1</van-tag>
          <van-tag  plain  type="danger" > 标签2 </van-tag>
        </div> -->
        <!-- <div  slot="footer"  class="card__footer">
          <van-button  round  size="mini" >  购买一  </van-button>
          <van-button round  size="mini"  > 购买二  </van-button>
        </div> -->
      </van-card>
       <!-- <van-pagination 
            v-model="pageConfig.pageNumber" 
            :total-items="pageConfig.totalItems" 
            :show-page-size="pageConfig.pageSize" 
            force-ellipses
            
            />  -->
    </div>
</template>

<script>
import * as type from '@/Enums'
export default {
    name:'goods-item',
    props:{
      dataSource:{},
      dataFrom:{
        type:String,
        default:type.dataFrom_goodsList
      }//rusnNow,rushAfter,goodsList,category
    },
    data(){
        return {
           ProductTag:'抢购',
            pageConfig:{
                 pageNumber:1, 
                 pageSize:10,
                 totalItems:0,
           },
           imageURL:'//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
        //    goods:{
        //     price:'10',
        //     tag:'50%',
        //     desc:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        //     title:'流畅性衬衫',
        //     imageURL:'//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
         }
    },
    methods:{
      handleGoodsDetail(goods){
        //debugger
        let goodsId =goods.id1;
         if(goodsId==null || goodsId=="")
          {
            goodsId =goods.goodsId
          }
       this.$router.push({
        path:'/goodsdetail',
        query:{
          id:goodsId,
          type:this.dataFrom
        }
      })
      }
    },
    updated(){
       // console.log("商品列表数据updated-good-item："+JSON.stringify(this.dataSource));
    },
    mounted(){
       this.$nextTick(()=>{
             // console.log("商品列表数据mounted-good-item："+JSON.stringify(this.dataSource));
        })
    }
} 
</script>


<style lang="less" scope>
//   .van-card__title {
//       color: #505050;
//       font-size: 14px;
//       text-align: justify;
//       font-weight: 800;
//   }
//   .van-card__price {
//     color: #ef4f4f;
//     font-size: 15px;
//     font-weight: 600;
// }
    .van-card {
        text-align: left;
    }
  .card__footer {
    padding-top: 10px;
  }
  .card__tags {
    .van-tag {
      margin-right: 5px;
    }
  }
</style>

