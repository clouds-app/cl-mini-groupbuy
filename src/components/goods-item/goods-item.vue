<template>
    <div>
         <!-- origin-price="10.00"  num="2" -->
        <van-card v-for="goods in dataSource" :key="goods.id1"
        :price="goods.price"
        :tag="goods.tag"
        :desc="goods.goodsDesc"
        :title="goods.goodsName"
        :thumb="imageURL"
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
    </div>
</template>

<script>
export default {
    name:'goods-item',
    props:{
      dataSource:{
      
      }
    },
    data(){
        return {
           imageURL:'//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
        //    goods:{
        //     price:'10',
        //     tag:'50%',
        //     desc:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        //     title:'流畅性衬衫',
        //     imageURL:'//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
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


<style lang="less">
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

