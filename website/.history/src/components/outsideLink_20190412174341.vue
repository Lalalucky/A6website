<template>
   <div class="outsideLink">
       <div class="link">
           <img src="../assets/images/outLink/phone.png" alt="">
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
    margin-top:-100px;
    z-index: 999;
    .link{
        display: block;
        position: relative;
        padding: 5px;
        width: 45px;
        height: 45px;
        border: 1px solid #ececec;
    }
}
</style>
