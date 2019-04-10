<template>
   <div class="register">
       <h1 class="theme">距离您所需要的服务只差一步</h1>
       <div class="linkTo">免费体验</div>
   </div>
</template>

<script>
export default {
   name: 'register',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="less">
.register{
    width: 100%;
    margin: 0 auto;
    border: 1px solid #ececec;
    height: 300px;
    padding: 30px 0 20px;
    text-align: center;
    background:url('~@/assets/images/home/register.png') no-repeat center;
    h1{
        font-size: 24px;
        font-weight: bolder;
        line-height: 30px;
        padding-bottom: 80px;
    }
    .linkTo{
        cursor: pointer;
        width: 80px;
        height: 30px;
        line-height: 20px;
        border: 1px solid #ececec;
        border-radius: 5px;
        padding: 5px;
        font-size: 16px;
        margin: 0 auto;
    }
}
</style>
