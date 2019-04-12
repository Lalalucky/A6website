<template>
   <div class="outsideLink">
       <div class="link">
           在线咨询
       </div>
       <div class="link">
           <div><img src="../assets/images/outLink/phone.png" alt=""></div>
       </div>
       <div class="link">
           <img src="../assets/images/outLink/QQ.png" alt="">
       </div>
       <div class="link">
           <img src="../assets/images/outLink/wechat.png" alt="">
       </div>
   </div>
</template>

<script>
export default {
   name: '',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="less">
.outsideLink{
    position: fixed;
    right: 0;
    top: 50%;
    margin-top:-60px;
    z-index: 999;
    background: rgba(74, 144, 226, 1);
    .link{
        display: block;
        position: relative;
        width: 50px;
        height: 50px;
        padding: 5px;
        line-height: 18px;
        color: #ffffff;
        text-align: center;
        &>div{
            width: 40px;
            height: 40px;
            margin: 0 auto;
            border-top: 1px solid #ffffff;
            img{
                display: block;
                margin: 0 auto;
                width:30px;
            }
        }
        
        &:not(:first-child){
            // border-top: 1px solid #ffffff;
        }
    }
}
</style>
