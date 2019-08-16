<template>
    <div class="register">
        <!-- <h1 class="theme">距离您所需要的服务只差一步</h1> -->
        <a href="http://www.yunbaonet.cn/?yijiaoyu=true" target="_blank" class="linkTo">立即体验
            <i class="iconfont icon-icon"></i></a>
    </div>
</template>

<script>
export default {
    name: "register",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="less">
.register {
    width: 100%;
    margin: 0 auto;
    margin-bottom: -2px;
    margin-left: -1px;
    border: 1px solid #ececec;
    height: 300px;
    padding: 30px 0 20px;
    text-align: center;
    background: url("~@/assets/images/home/register.png") center;
    .linkTo {
        cursor: pointer;
        // background:url('~@/assets/images/home/register体验.png') no-repeat center;
        margin: 0 auto;
        color: #ffffff;
        line-height: 56px;
        font-size: 20px;
        font-weight: 500;
        margin-top: 150px;
        width: 180px;
        height: 56px;
        background: linear-gradient(
            180deg,
            rgba(255, 221, 135, 1) 0%,
            rgba(246, 185, 84, 1) 100%
        );
        border-radius: 8px;
    }
}
</style>
