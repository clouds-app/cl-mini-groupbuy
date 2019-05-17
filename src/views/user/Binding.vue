<template>
  <div>
    <!-- <back-arrow title="用户登录"/> -->
    <div>
      <div class="adArrow">
          <van-nav-bar @click-left="handleBack" title="用户绑定" left-text="" left-arrow>
      </van-nav-bar> 
          </div>
      <div class="backArrowDown"></div>
    </div>
     <login-form :isLoding="isLoding" @on-success-login-valid="handleSubmit"></login-form>
  </div>
</template>

<script>
import BackArrow from '_c/back-arrow'
import common_mix from '@/views/mixins/common';
import { mapActions } from "vuex";
import LoginForm from "_c/login-form";
export default {
  name: "loginView",
  mixins:[common_mix],
  components: {
    LoginForm,BackArrow
  },
  data() {
    return {
      isLoding :false,
    };
  },
  methods: {
    ...mapActions(["userBinding", "getUserInfo"]),
    handleBack(){
      this.HandleRedirect('home')
    },
    handleSubmit({ username, password }) {
       this.isLoding=true;
      this.userBinding({ username, password })
        .then(res => {
          this.isLoding=false;
          this.showSuccessNotify("绑定成功");
          this.$router.push({
            name: this.$config.homeName
          });
        })
        .catch(err => {
          this.isLoding=false;
           this.showErrorNotify(err);
        });
    }
  },
  mounted() {}
};
</script>
