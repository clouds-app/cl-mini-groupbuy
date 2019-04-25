<template>
  <div>
     <back-arrow title="产品列表" />
     <Scroll
            class="scroll"
            :bounce="bounce"
            ref="scroll"
            :pullup="true"
            @scrollToEnd="scrollToEnd"
        >
     <goods-item :dataSource="goodsDataList"/>
     </Scroll>
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
import GoodsItem from "_c/goods-item";
import Scroll from "_c/scroll";
export default {
  name: "goods-list",
  props: {
    
    // dataSource: {},
    // dataFrom: {
    //   type: String,
    //   default: "self"
    // }
  },
  components: {
    GoodsItem,BackArrow,Scroll
  },
  data() {
    return {
      showPageOrNot:false,
      goodsDataList: this.dataSource,
      showToastLoading: false,
      pageConfig: {
        pageNumber: 1,
        pageSize: 5,
        totalItems: 0
      },
      bounce: {
                bottom: true
            },
    };
  },
  methods: {
    scrollToEnd() {
            setTimeout(() => {
                this.$refs.scroll.refresh();
            }, 20);
        },
    getGoodsList() {
      if (true) {
        //debugger;
        this.goodsDataList = {};
        let params = {
          pageNumber: this.pageConfig.pageNumber,
          pageSize: this.pageConfig.pageSize
        };
        this.showLoadingToast();
        let self=this;
        this.$store
          .dispatch("getGoodsListByPages", params)
          .then(res => {
             //console.warn("获取分类商品: "+JSON.stringify(res.records));
            self.goodsDataList = res.records; //绑定所有分页产品
            self.initPageSetting(res);
            self.showPageOrNot = true;
            self.showToastLoading.clear();
          })
          .catch(err => {
            self.showErrorNotify(err);
            self.showToastLoading.clear();
          });
      }
    },
    //数据加载提示
    showLoadingToast() {
      this.showToastLoading = this.$toast.loading({
        mask: true,
        message: "加载中..."
      });
    },
    //初始化分页设置
    initPageSetting(responseData) {
      this.pageConfig.pageNumber = responseData.current;
      this.pageConfig.pageSize = responseData.size;
      this.pageConfig.totalItems = responseData.total;
    }
  },
  created() {
     this.getGoodsList();
  },
  updated() {
    //console.log("商品列表数据updated-goods-list："+JSON.stringify(this.dataSource));
  },
  mounted() {
    this.$nextTick(() => {
     
    });
  }
};
</script>


<style lang="less">
.scroll {
    // position: fixed;
    // top: 0px;
    // bottom: 50px;
    // left: 0;
    // right: 0;
    height: 500px;
    overflow: scroll;
}
</style>

