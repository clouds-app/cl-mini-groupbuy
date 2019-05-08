<template>
    <div>
        <back-arrow title="公告详细" />
        <div class="adcontent" v-html="addetailContent"></div>
    </div>
</template>

<script>
import BackArrow from '_c/back-arrow'
export default {
    name:'ad-detail',
    data(){
        return {
           adid:this.$route.query.id,
           addetailContent:''
        }
    },
    components:{
        BackArrow
    },
    methods:{
         showDetail(adId){
        let params={
          id:adId
        }
        let _self=this;
        this.$store.dispatch('getAdDetailById',params).then(res=>{
           
            _self.addetailContent =res.noteContent
        }).catch(err=>{
          //_self.showErrorNotify(err);
        })
      },
    },
    mounted(){
        if(this.adid !='')
        {
                this.showDetail(this.adid)
        }
       
    }
}
</script>

<style>

.adcontent{
    margin:8px;
    /* margin-top: 50px; */
}
 img{                 
   width: auto;                 
   height:auto;                 
   max-height: 100%;                 
   max-width: 100%;} 
</style>
