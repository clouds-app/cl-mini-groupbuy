//视图公用方法

export default {
    props: {
    
    },
    computed: {
    },
    methods: {
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
  