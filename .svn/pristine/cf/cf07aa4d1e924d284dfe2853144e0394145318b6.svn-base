<template>
    <div>
    <van-nav-bar @click-left="handleBack" :title="title" left-text="" left-arrow>
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

<style scoped>
.van-nav-bar .van-icon {
    font-size: 24px;
    cursor: pointer;
    color: #969799;
}

.van-nav-bar__title {
    font-size: 17px;
    text-transform: capitalize;
}
</style>
