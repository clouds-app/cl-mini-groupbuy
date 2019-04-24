<template>
    <div>
        <back-arrow title="分类"/>
        <van-tabs v-model="currentActive" @click="onClickByCategory">
               <van-tab v-for="(item) in categoryList"  :key="item.id1" :title="item.name">
                  <GoodsList :dataSource="goodsDataList" :dataFrom="category"/>
               </van-tab>
        </van-tabs>
        <van-pagination 
            v-model="pageConfig.pageNumber" 
            :total-items="pageConfig.totalItems" 
            :show-page-size="pageConfig.pageSize" 
            force-ellipses
            v-if="showPageOrNot"
            /> 
     
    </div>
</template>
<script>
import BackArrow from '_c/back-arrow'
import { mapGetters, mapActions } from "vuex";
import common_mix from '@/views/mixins/common';
import Scroll from "_c/scroll";
import GoodsList from '@/views/GoodsList'

export default {
    name: 'Category',
    mixins:[common_mix],
    data() {
        return {
           category:"category",
           backArrowTitle:"分类",
           showPageOrNot:false,
           showToastLoading:{},
           currentActive: 0,
           goodsDataList:{},
           goodsType:-1, 
           pageConfig:{
                 pageNumber:1, 
                 pageSize:10,
                 totalItems:0,
           },
           categoryList: {}
        };
    },
    computed:{
        ...mapGetters(
        {
           //如果你想将一个 getter 属性另取一个名字，使用对象形式：
           // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
          //showCategoryList:'getGoodsTypeList',
        }
      )
    },
    components: {
        BackArrow,GoodsList
    },
    methods: {
          ...mapActions(['getGoodsTypeList']),
          //切换类别获取商品列表
          onClickByCategory(index) {
            //alert(index)
            this.goodsType = this.categoryList[index].id1; //获取类型
         
            if(this.goodsType!=null && this.goodsType!=""){
               
                this.getGoodsListByCategory(this.goodsType)
            }
           
        },
        //获取所有分类
        getAllCategory(){
            //等同于： this.$store.dispatch('getGoodsTypeList')
            this.categoryList= {};
            this.getGoodsTypeList().then(res=>{
              this.categoryList=res;//绑定分类
             //初始化第一个分类的商品列表 
              if(this.categoryList[0]!=null && this.categoryList[0].id1!="")
              {    // alert(this.categoryList[0].id1);
                    this.getGoodsListByCategory(this.categoryList[0].id1)
              }
              //alert(this.goodsDataList);
            }).catch(err=>{
              this.showErrorNotify(err);
            })
        },
        //获取分类商品
        getGoodsListByCategory(goodsType){
            //alert(goodsType)
           this.goodsDataList = {};
            let params = {
                goodsType:1, //测试暂时设置为1
                pageNumber:this.pageConfig.pageNumber, 
                pageSize:this.pageConfig.pageSize
              }
              this.showLoadingToast()
              let self=this;
            this.$store.dispatch('getGoodsListByType',params).then((res)=>{
                    // console.warn("获取分类商品: "+JSON.stringify(res.records));
                     self.goodsDataList =res.records//绑定分类产品
                     self.initPageSetting(res);
                     self.showPageOrNot=true;
                     self.showToastLoading.clear()
                }).catch(err=>{
                     self.showErrorNotify(err);
                    self.showToastLoading.clear()
                });
        },
        //数据加载提示
        showLoadingToast() {
                           this.showToastLoading= this.$toast.loading({ mask: true, message: "加载中..." });
        },
        //初始化分页设置
        initPageSetting(responseData){
              this.pageConfig.pageNumber = responseData.pageNumber
              this.pageConfig.pageSize = responseData.pageSize
              this.pageConfig.totalItems = responseData.totalItems
        }

    },
    updated(){
        //console.warn(JSON.stringify(this.categoryList));
    },
    created(){
        //初始化获取分类
          let init= this.getAllCategory()
         
    },
    mounted(){
        this.$nextTick(()=>{
        })
    }
};
</script>

<style scoped>
.category {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.content {
    display: flex;
    position: fixed;
    top: 39px;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>