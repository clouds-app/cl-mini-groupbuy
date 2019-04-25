<template>
    <div>
        <register-form :isLoding="isLoding" @on-success-register-valid="handleSubmit"></register-form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import RegisterForm from '_c/register-form'
import common_mix from '@/views/mixins/common';
export default {
    name:'RegisterView',
    mixins:[common_mix],
    data(){
        return {
            isLoding:false
        }
    },
    components:{
      RegisterForm
    },
    methods:{
        ...mapActions([
            'handleRegister'
        ]),
    //      showErrorNotify(msg) {
    //         this.$notify({
    //             message: msg,
    //             duration: 1000,
    //             background: "#f44"
    //         });
    //    },
    // showSuccessNotify(msg) {
    //     this.$notify({
    //         message: msg,
    //         duration: 1000,
    //         background: "#07c160"
    //     });
    // },
        handleSubmit ({ username, password,phoneNo,userCode }) {
           
            this.isLoding=true;
            this.handleRegister({ username, password,phoneNo,userCode }).then(res => {
            this.isLoding=false;
           this.showSuccessNotify("注册成功");
        }).catch(err => {
            this.isLoding=false;
          // alert(err);
          this.showErrorNotify("注册失败，请稍后再试！");
        })
    }
    }

    
}
</script>
