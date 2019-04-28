//视图公用方法

export default {
    data(){
      return {
        showToastLoading: {},
      }
    },
    props: {
    
    },
    computed: {
    },
    methods: {
       //数据加载提示
        showLoadingToast(msg) {
          this.showToastLoading = this.$toast.loading({
            mask: true,
            message: msg || "加载中..."
          });
        },
        //失败消息
        showErrorNotify(msg) {
            this.$notify({
              message: msg,
              duration: 1000,
              background: "#f44"
            });
          },
        //成功消息
          showSuccessNotify(msg) {
            this.$notify({
              message: msg,
              duration: 1000,
              background: "#07c160"
            });
          },
          //跳转路由地址
          HandleRedirect(pathName){
            this.$router.push({
                name: pathName
                });
        },
    }
  };
  