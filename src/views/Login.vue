<template>
  <div>
     <login-form :isLoding="isLoding" @on-success-login-valid="handleSubmit"></login-form>
  </div>
</template>

<script>
import common_mix from '@/views/mixins/common';
import { mapActions } from "vuex";
import LoginForm from "_c/login-form";
export default {
  name: "loginView",
  mixins:[common_mix],
  components: {
    LoginForm
  },
  data() {
    return {
      isLoding :false,
    };
  },
  methods: {
    ...mapActions(["handleLogin", "getUserInfo"]),
    handleSubmit({ username, password }) {
       this.isLoding=true;
      this.handleLogin({ username, password })
        .then(res => {
          this.isLoding=false;
          this.showSuccessNotify("登陆成功");
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
