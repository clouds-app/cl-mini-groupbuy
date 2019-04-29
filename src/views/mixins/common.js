//视图公用方法
import {getCookie} from '@/libs/util'
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
      checkLogin(){
        if(getCookie('userName')=="")
        {
          return false;
        }
        else
        {
          return true;
        }
      },
        getBaseImgUrl(imgUrl){  //"http://192.168.0.156:8081/clerp-shop-admin
           return "http://192.168.168.111:8081/clerp-shop-admin/"+imgUrl
        },
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
					closeLoaddingToast() {
						this.$toast.clear();
					},
          //跳转路由地址
          HandleRedirect(pathName){
            this.$router.push({
                name: pathName
                });
        },
    }
  };
  