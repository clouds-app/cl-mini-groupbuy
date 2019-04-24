<template>
  <div>
     <back-arrow title="产品列表"/>
    <goods-item :dataSource="goodsDataList"/>
  </div>
</template>

<script>
import BackArrow from '_c/back-arrow'
import GoodsItem from "_c/goods-item";
export default {
  name: "goods-list",
  props: {
    //showPageOrNot:false,
    dataSource: {},
    dataFrom: {
      type: String,
      default: "self"
    }
  },
  components: {
    GoodsItem,BackArrow
  },
  data() {
    return {

      goodsDataList: this.dataSource,
      showToastLoading: false,
      pageConfig: {
        pageNumber: 1,
        pageSize: 10,
        totalItems: 0
      }
    };
  },
  methods: {
    getGoodsList() {
      if (this.dataFrom === "self") {
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
            // console.warn("获取分类商品: "+JSON.stringify(res.records));
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
  created() {},
  updated() {
    //console.log("商品列表数据updated-goods-list："+JSON.stringify(this.dataSource));
  },
  mounted() {
    this.$nextTick(() => {
      this.getGoodsList();
    });
  }
};
</script>


<style lang="less">
</style>

