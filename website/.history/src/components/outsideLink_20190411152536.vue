<template>
   <div class="outsideLink">
       <div class="link">
           <img src="" alt="">
       </div>
       <div class="link">
           <img src="" alt="">
       </div>
       <div class="link">
           <img src="" alt="">
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
    .link{
        display: block;
        position: relative;
        width: 45px;
        height: 45px;
        border: 1px solid #ececec;
    }
}
</style>
