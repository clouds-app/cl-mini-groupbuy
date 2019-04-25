<template>
    <div>
    <van-nav-bar @click-left="handleBack" :title="title" left-text="返回" left-arrow>
   </van-nav-bar> 
    </div>
   
</template>
<script>
export default {
    props:['title'],
    methods:{
        handleBack(){
            this.$router.back(-1)
        }
    }
}
</script>