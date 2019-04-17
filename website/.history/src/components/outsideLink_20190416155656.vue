<template>
   <div class="outsideLink">
       <div class="link_phone">
           在线咨询
       </div>
       <div class="link">
           <div class="with_icon"><img src="../assets/images/outLink/phone.png" alt=""></div>
           <div class="phoneNo">

           </div>
       </div>
       <div class="link">
           <div class="with_icon"><img src="../assets/images/outLink/QQ.png" alt=""></div>
       </div>
       <div class="link">
           <div class="with_icon"><img src="../assets/images/outLink/wechat.png" alt=""></div>
       </div>
   </div>
</template>
+
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
    .link_phone{
        display: block;
        position: relative;
        width: 50px;
        height: 50px;
        padding: 6px;
        line-height: 20px;
        color: #ffffff;
        text-align: center;
    }
    .link{
        display: block;
        position: relative;
        width: 50px;
        height: 50px;
        color: #ffffff;
        text-align: center;
        .with_icon{
            width: 40px;
            height: 40px;
            padding: 5px;
            margin: 0 auto;
            border-top: 1px solid #ffffff;
            img{
                display: block;
                margin: 0 auto;
                height: 30px;
            }
        }
        .phoneNo{
            position: absolute;
            background: url('~@/assets/images/outLink/phone_slide.png')
        }
    }
}
</style>
